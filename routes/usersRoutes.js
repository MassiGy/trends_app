const express = require("express");
const usersRouter = express.Router();

const usersControllers = require("../controllers/users/index");
const { sanitize } = require("../middlewares/sanitization/sanitize");

usersRouter.post("/register", sanitize, usersControllers.register);



module.exports = usersRouter;