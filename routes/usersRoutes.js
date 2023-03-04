const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const commentsControllers=require("../controllers/comments/index");



usersRouter.get("/:user_id", sanitize, usersControllers.showProfile);
usersRouter.get("/:user_id/comments",sanitize,commentsControllers.viewUserComments);
usersRouter.get("/:user_id/comments/:comment_id",sanitize,commentsControllers.viewComment);


usersRouter.post("/register", sanitize, usersControllers.register);
usersRouter.post("/:user_id/edit", sanitize, usersControllers.editProfile);
usersRouter.post("/:user_id/signout", sanitize, usersControllers.signout);
postsRouter.post("/:user_id/comments/:comment_id/edit", sanitize, commentsControllers.editComment);
usersRouter.post("/:user_id/comments/:comment_id/delete",sanitize,commentsControllers.deleteComment);



module.exports = usersRouter;