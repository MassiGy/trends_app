const express = require("express");
const postsRouter = express.Router();

const postsControllers = require("../controllers/posts/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const commentsControllers = require("../controllers/comments/index");

postsRouter.get("/:post_id", sanitize, postsControllers.viewPost);
postsRouter.get("/:post_id/comments", sanitize, commentsControllers.viewPostComments);
postsRouter.get("/:post_id/comments/:comment_id", sanitize, commentsControllers.viewComment);



postsRouter.post("/add", sanitize, postsControllers.addPost);
postsRouter.post("/:post_id/edit", sanitize, postsControllers.editPost);
postsRouter.post("/:post_id/delete", sanitize, postsControllers.deletePost);
postsRouter.post("/:post_id/upvote", sanitize, postsControllers.upvotePost);
postsRouter.post("/:post_id/downvote", sanitize, postsControllers.downvotePost);
postsRouter.post("/:post_id/comments/add", sanitize, commentsControllers.addComment);
postsRouter.post("/:post_id/comments/:comment_id/edit", sanitize, commentsControllers.editComment);
postsRouter.post("/:post_id/comments/:comment_id/delete", sanitize, commentsControllers.deleteComment);



module.exports = postsRouter;