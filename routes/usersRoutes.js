const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");


usersRouter.get("/:user_id", sanitize, usersControllers.showProfile);


usersRouter.post("/register", sanitize, usersControllers.register);
usersRouter.post("/:user_id/edit", sanitize, usersControllers.editProfile);
usersRouter.post("/:user_id/signout", sanitize, usersControllers.signout);



module.exports = usersRouter;