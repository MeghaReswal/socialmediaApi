const express = require("express");
const postController = require("../controller/post.controller");

const router = express.Router();

router
  .route("/")
  .post(postController.createPost)
  .get(postController.getAllPosts);

router.route("/:postId/like").post(postController.likePost);

module.exports = router;
