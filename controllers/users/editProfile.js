const { db_handler } = require("../../database/config/mysql.conf");


module.exports.editProfile =  (req, res) => {

    const { new_user_nickname, new_user_email, new_user_password } = req.body;
    const { user_id } = req.params;

    let sql = `
        UPDATE USER SET
            user_nickname= '${new_user_nickname}',
            user_email='${new_user_email}',
            user_password='${new_user_password}'
        WHERE
            user_id=${user_id};`;


    db_handler.query(sql, (err) => {
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }

        return res.send("OK.");
    });
}