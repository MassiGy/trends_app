const express=require('express');
const othersRouter=express.Router();
const othersControllers=require('../controllers/others/index');
const { sanitize } = require("../middlewares/sanitization/sanitize");


othersRouter.get('/',sanitize,othersControllers.renderHome);







module.exports = othersRouter;