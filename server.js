/** IMPORT OUR DEPENDENCIES */
const express = require("express");
const app = express();
const path = require('path');
const sessions = require("express-session");
// Importing file-store module
const filestore = require("session-file-store")(sessions);


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
    saveUninitialized: false,
    store: new filestore(),
    cookie: {
        maxAge: 5 * 24 * 60 * 60 * 1000, //  max_age = 3 days
    }
}

app.use(sessions(sessionOption));



/** IMPORT & USE OUR ROUTES */
const router = require("./routes/index");
app.use(router);




/** LAUNCH OUR SERVER  */

app.listen(3000, () => {
    console.log("Server launched on port : %d", 3000);
})
