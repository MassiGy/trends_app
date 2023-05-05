const { db_handler } = require("../../database/config/mysql.conf");
const bcrypt = require("bcryptjs");

module.exports.signup = (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;
    
    if (!user_nickname.length || !user_email.length || !user_password.length){
        return res.send("Credentials can not be blank."); 
    }

    // hash the password
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(String(user_password), salt);

    let sql = `
        INSERT INTO USER
            (user_nickname,user_email,user_password)
        VALUES
            ('${user_nickname}', '${user_email}', '${hash}')`;

    db_handler.query(sql, (err) => {
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }

        // create session for the current user &send back a cookie 
        req.session.active_user_email = user_email;

        return res.send("Successfuly signed up.");
    });
}