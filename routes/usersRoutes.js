const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const postsControllers = require("../controllers/posts/index");
const commentsControllers = require("../controllers/comments/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");
const { checkLogin } = require("../middlewares/auth/checkLogin");
const { checkAuthorization } = require("../middlewares/auth/checkAuthorization");


usersRouter.get("/:user_id", sanitize, checkLogin, usersControllers.showProfile);
usersRouter.get("/:user_id/comments", sanitize, checkLogin, commentsControllers.viewUserComments);
usersRouter.get("/:user_id/comments/:comment_id", sanitize, checkLogin, commentsControllers.viewComment);


usersRouter.post("/login", sanitize, usersControllers.login);
usersRouter.post("/logout", sanitize, usersControllers.logout);
usersRouter.post("/signup", sanitize, usersControllers.signup);
usersRouter.post("/signout", sanitize, usersControllers.signout);

usersRouter.post("/:user_id/edit", sanitize, checkLogin, checkAuthorization, usersControllers.editProfile);

usersRouter.post("/:user_id/posts/:post_id/edit", sanitize, checkLogin, checkAuthorization, postsControllers.editPost);
usersRouter.post("/:user_id/posts/:post_id/delete", sanitize, checkLogin, checkAuthorization, postsControllers.deletePost);
usersRouter.post("/:user_id/posts/:post_id/comments/:comment_id/edit", sanitize, checkLogin, checkAuthorization, commentsControllers.editComment);
usersRouter.post("/:user_id/posts/:post_id/comments/:comment_id/delete", sanitize, checkLogin, checkAuthorization, commentsControllers.deleteComment);

usersRouter.post("/:user_id/comments/:comment_id/edit", sanitize, checkLogin, checkAuthorization, commentsControllers.editComment);
usersRouter.post("/:user_id/comments/:comment_id/delete", sanitize, checkLogin, checkAuthorization, commentsControllers.deleteComment);



module.exports = usersRouter;