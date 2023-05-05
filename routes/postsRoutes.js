const express = require("express");
const postsRouter = express.Router();

const postsControllers = require("../controllers/posts/index");
const commentsControllers = require("../controllers/comments/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const { checkLogin } = require("../middlewares/auth/checkLogin");


postsRouter.get("/:post_id", sanitize, checkLogin, postsControllers.viewPost);
postsRouter.get("/:post_id/comments", sanitize, checkLogin, commentsControllers.viewPostComments);
postsRouter.get("/:post_id/comments/:comment_id", sanitize, checkLogin, commentsControllers.viewComment);


postsRouter.post("/add", sanitize, checkLogin, postsControllers.addPost);
postsRouter.post("/:post_id/upvote", sanitize, checkLogin, postsControllers.upvotePost);
postsRouter.post("/:post_id/downvote", sanitize, checkLogin, postsControllers.downvotePost);
postsRouter.post("/:post_id/comments/add", sanitize, checkLogin, commentsControllers.addComment);






module.exports = postsRouter;