/** IMPORT OUR DEPENDENCIES */
const express = require("express");
const app = express();
const dotenv = require("dotenv");

/** IMPORT OUR ENVS */
dotenv.config()

/** CONNECT TO OUR MYSQL INSTENCE */
const { db_handler } = require("./database/config/mysql.conf");
(async () => {
    await db_handler.connect((err) => {
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


/** IMPORT & USE OUR ROUTES */
const router = require("./routes/index");
app.use(router);




/** LAUNCH OUR SERVER  */

app.listen(3000, () => {
    console.log("Server launched on port : %d", 3000);
})