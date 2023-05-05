const { db_handler } = require("../../database/config/mysql.conf");
const bcrypt = require("bcryptjs");


module.exports.login = (req, res) => {

    if(req.session.active_user_email){
        return res.send("Already logged in!");
    }


    const { user_email, user_password } = req.body;
    
    if (!user_email.length || !user_password.length){
        return res.send("Credentials can not be blank."); 
    }

    let sql = `
        SELECT user_password
        FROM USER
        WHERE user_email = '${user_email}' ;`;

    db_handler.query(sql, (err, result) => {
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }
        if(!result || result.length != 1){
            return res.send("Email or Password incorrect.");
        }
       

        // check if the typed password is equal to the hashed database password.
        const is_password_correct = bcrypt.compareSync(user_password, result[0].user_password);

        if(!is_password_correct){
            return res.send("Email or Password incorrect.");
        }


        // set the session.active_user_email to the type user_email
        req.session.active_user_email = user_email;

        return res.send("Successfuly logged in.");
    });
}