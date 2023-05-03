const { db_handler } = require("../../database/config/mysql.conf");


module.exports.showProfile =  (req, res) => {

    const { user_id } = req.params;

    let sql = `
        SELECT user_nickname,user_email 
        FROM USER
        WHERE user_id=${user_id};`;


    db_handler.query(sql, (err, results) => {
        if (err) res.send("Error payload is set to : "+ err.message);
        return res.json(results);
    });
}