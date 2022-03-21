const express = require("express");
const app = express();
const axios = require("axios");
const fetch = require("node-fetch");

//promise handeling with then catch methods using callback
const getPosts = async (req, res) => {
  try {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      let result = response.data;
      res.status(200).json(result);
    });
  } catch (err) {
    // res.status(500).json({
    //   message: err.message,
    // });
    console.log(err.message);
  }
};

// getting a single post using sync await
const getPostByID = async (req, res) => {
  try {
    let id = req.params.id;
    let post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    let result = post.data;
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getPosts,
  getPostByID,
};
