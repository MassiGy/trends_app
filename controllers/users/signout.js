const { db_handler } = require("../../database/config/mysql.conf");


module.exports.signout = (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;
    const { user_id } = req.params;

    let sql = `
        SELECT * FROM USER
        WHERE user_id = ${user_id}; `;


    db_handler.query(sql, (err, results) => {
        if (err) {
            console.log("Error payload is set to : %s\n", err.message);
            return;
        }

        if (!results || results.length != 1) {
            return res.send("No user was found with the given id.");
        }

        let safetoDelete = results[0].user_nickname == user_nickname && results[0].user_email == user_email && results[0].user_password == user_password;
        if (!safetoDelete) return res.send("No user was found with the given data.");

        sql = `DELETE FROM USER WHERE user_id = ${user_id}; `;


        db_handler.query(sql, (err) => {
            if (err) {
                console.log("Error payload is set to : %s\n", err.message);
                return;
            }
            return res.send("OK.");
        })

    });
}