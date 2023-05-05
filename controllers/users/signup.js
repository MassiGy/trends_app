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
            ('${user_nickname}', '${user_email}', '${hash}');
        `;

    db_handler.query(sql, (err) => {
       
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }
        sql = `
            SELECT user_id
            FROM USER
            WHERE user_email = '${user_email}' ;
        `;
      
        db_handler.query(sql, (err, results) => {
            if (err) {
                return res.send("Error payload is set to : "+ err.message);
            }

            if(!results || results.length != 1){
                return res.send("Something went wrong. Please log in to proceed.");
            }
    
            let user_id = results[0].user_id;
    
    
            // create session for the current user &send back a cookie 
            req.session.active_user_email = user_email;
            req.session.active_user_id = user_id ;
    
            return res.send("Successfuly signed up.");
        })
    });
}