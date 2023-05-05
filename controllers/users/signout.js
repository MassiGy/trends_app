const { db_handler } = require("../../database/config/mysql.conf");
const bcrypt = require("bcryptjs");

module.exports.signout = (req, res) => {

    const { user_email, user_password } = req.body;
   
    let sql = `
        SELECT * FROM USER
        WHERE user_email = '${user_email}'; `;


    db_handler.query(sql, (err, results) => {
        if (err) return res.send("Error payload is set to : "+ err.message);


        if (!results || results.length != 1) return res.send("Email or Password incorrect.");

       

        let safetoDelete = bcrypt.compareSync(user_password, results[0].user_password);
        
        if (!safetoDelete) return res.send("Email or Password incorrect.");

        sql = `
            DELETE FROM COMMENT WHERE author_id =${results[0].user_id};
            DELETE FROM POST WHERE author_id =${results[0].user_id};
            DELETE FROM USER WHERE user_id =${results[0].user_id};`;



        db_handler.query(sql, (err) => {
            /** sql does not work for an error that we do not understand. */
            //if (err) return res.send("Error payload is set to : "+ err.message);

            // destroy the session and the corresponding file.
            req.session.destroy();

            return res.send("Successfuly signed out.");
        })

    });
}