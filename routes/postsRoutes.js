const express = require("express");
const postsRouter = express.Router();

const postsControllers = require("../controllers/posts/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");

postsRouter.get("/:post_id", sanitize, postsControllers.viewPost);


postsRouter.post("/add", sanitize, postsControllers.addPost);
postsRouter.post("/:post_id/edit", sanitize, postsControllers.editPost);
postsRouter.post("/:post_id/delete", sanitize, postsControllers.deletePost);


module.exports = postsRouter;