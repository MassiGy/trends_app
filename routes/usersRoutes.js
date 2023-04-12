const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const commentsControllers=require("../controllers/comments/index");


usersRouter.get("/login", usersControllers.renderLogIn);
usersRouter.get("/signup", usersControllers.renderSignUp);
usersRouter.get("/:user_id", sanitize, usersControllers.showProfile);
usersRouter.get("/:user_id/comments",sanitize,commentsControllers.viewUserComments);
usersRouter.get("/:user_id/comments/:comment_id",sanitize,commentsControllers.viewComment);


usersRouter.post("/signup", sanitize, usersControllers.signup);
usersRouter.post("/:user_id/edit", sanitize, usersControllers.editProfile);
usersRouter.post("/:user_id/signout", sanitize, usersControllers.signout);
usersRouter.post("/:user_id/comments/:comment_id/edit", sanitize, commentsControllers.editComment);
usersRouter.post("/:user_id/comments/:comment_id/delete",sanitize,commentsControllers.deleteComment);



module.exports = usersRouter;