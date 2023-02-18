const { db_handler } = require("../../database/config/mysql.conf");


module.exports.register = async (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;

    let sql = `
        INSERT INTO USER
            (user_nickname,user_email,user_password)
        VALUES
            ('${user_nickname}', '${user_email}', '${user_password}')`;

    await db_handler.query(sql, (err) => {
        if (err) {
            console.log("Error payload is set to : %s\n", err.message);
            return;
        }

        return res.send("OK.")
    });
}