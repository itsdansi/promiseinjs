const router = require("express").Router();
const postController = require("./../controllers/postController");

router.get("/", postController.getPosts);
router.get("/:id", postController.getPostByID);
// router.get("/", postController.getSomePost);

module.exports = router;
