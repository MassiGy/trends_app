let mysql = require('mysql');

module.exports.db_handler = mysql.createConnection({
    host: String(process.env.DB_HOST),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME),
});

