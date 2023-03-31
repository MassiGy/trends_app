const express = require('express');
const othersRouter = express.Router();
const othersControllers = require('../controllers/others/index');
const { sanitize } = require("../middlewares/sanitization/sanitize");


othersRouter.get('/',sanitize,othersControllers.renderHome);
othersRouter.get('/home',sanitize,othersControllers.renderHome);
othersRouter.get('/signUp',sanitize,othersControllers.renderSignUp);
othersRouter.get('/logIn',othersControllers.renderLogIn);







module.exports = othersRouter;