const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const commentsControllers = require("../controllers/comments/index");
const { checkLogin } = require("../middlewares/auth/checkLogin");


usersRouter.get("/:user_id", sanitize, checkLogin, usersControllers.showProfile);
usersRouter.get("/:user_id/comments", sanitize, checkLogin, commentsControllers.viewUserComments);
usersRouter.get("/:user_id/comments/:comment_id", sanitize, checkLogin, commentsControllers.viewComment);


usersRouter.post("/login", sanitize, usersControllers.login);
usersRouter.post("/logout", sanitize, usersControllers.logout);
usersRouter.post("/signup", sanitize, usersControllers.signup);
usersRouter.post("/signout", sanitize, usersControllers.signout);
usersRouter.post("/:user_id/edit", sanitize, checkLogin, usersControllers.editProfile);
usersRouter.post("/:user_id/comments/:comment_id/edit", sanitize, checkLogin, commentsControllers.editComment);
usersRouter.post("/:user_id/comments/:comment_id/delete", sanitize, checkLogin, commentsControllers.deleteComment);



module.exports = usersRouter;