const express = require("express");
const app = express();
const morgan = require("morgan");
const postRoute = require("./routes/postRoute");

/** Logging */
app.use(morgan("dev"));

/** Routes */
app.use("/posts", postRoute);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("An error occured!");
  console.log(error);
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
app.listen(process.env.PORT || 5000, () =>
  console.log("The server is running on port 5000")
);
