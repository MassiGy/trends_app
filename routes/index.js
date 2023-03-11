const express = require("express")
const router = express.Router();
const usersRoutes = require("./usersRoutes");
const postsRoutes = require("./postsRoutes");
const othersRoutes=require("./otherRoutes");


router.use("/users", usersRoutes);
router.use("/posts",postsRoutes);
router.use("/",othersRoutes);



module.exports = router;