/** IMPORT OUR DEPENDENCIES */
const express = require("express");
const app = express();
const path = require('path');
const sessions = require("express-session");
const flash = require("connect-flash");

const dotenv = require("dotenv");

/** IMPORT OUR ENVS */
dotenv.config()

/** CONNECT TO OUR MYSQL INSTENCE */
const { db_handler } = require("./database/config/mysql.conf");

(() => {
    db_handler.connect((err) => {
        if (err) {
            console.log("Error payload is set to: %s", err.message);
            return;
        }

        console.log("Database connected.");
    });
})();




/** SETUP OUR EXPRESS APP SETTINGS */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/** SETUP OUR SESSIONS */
const sessionOption = {
    name: String(process.env.SESSION_NAME),
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: false
}

app.use(sessions(sessionOption));


/** LAUNCH THE FLASH MIDDLEWARE */
app.use(flash());



/** SETUP SOME CUSTOM MIDDLEWARES */
app.use((req, res, next) => {

    res.locals.flashMessages = {
        success: req.flash("success"),
        error: req.flash("error")
    }

    console.log('flashMessages :>> ', res.locals.flashMessages);
    console.log('res.locals :>> ', res.locals);


    next();
})




/** IMPORT & USE OUR ROUTES */
const router = require("./routes/index");
app.use(router);




/** LAUNCH OUR SERVER  */

app.listen(3000, () => {
    console.log("Server launched on port : %d", 3000);
})
