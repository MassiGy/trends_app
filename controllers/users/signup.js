const { db_handler } = require("../../database/config/mysql.conf");


module.exports.signup = (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;
    
    if (!user_nickname.length || !user_email.length || !user_password.length){
        return res.send("Credentials can not be blank."); 
    }

    let sql = `
        INSERT INTO USER
            (user_nickname,user_email,user_password)
        VALUES
            ('${user_nickname}', '${user_email}', '${user_password}')`;

    db_handler.query(sql, (err) => {
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }

        return res.send("Successfuly signed up.");
    });
}