const { db_handler } = require("../../database/config/mysql.conf");


module.exports.register = (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;

    if (!user_nickname.length || !user_email.length || !user_password.length) {
        req.flash("error", "Credentials can not be blank.");
        return res.redirect("/signUp");
    }



    let sql = `
        INSERT INTO USER
            (user_nickname,user_email,user_password)
        VALUES
            ('${user_nickname}', '${user_email}', '${user_password}')`;

    db_handler.query(sql, (err) => {
        if (err) {
            console.log("Error payload is set to : %s\n", err.message);
            return res.redirect("/");

        }


    });

    db_handler.query(`SELECT user_id FROM USER WHERE user_email = '${user_email}';`, (err, results) => {

        if (err) {
            console.log("Error payload is set to : %s\n", err.message);
            return res.redirect("/");

        }
        req.session.user_id = results[0].user_id;
        
        req.flash("success", "Successfuly signed up.");
        return res.redirect("/home");

    })

}
