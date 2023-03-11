/** IMPORT OUR DEPENDENCIES */
const express = require("express");
const app = express();
const path=require('path');

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
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));




/** IMPORT & USE OUR ROUTES */
const router = require("./routes/index");
app.use(router);




/** LAUNCH OUR SERVER  */

app.listen(3000, () => {
    console.log("Server launched on port : %d", 3000);
})