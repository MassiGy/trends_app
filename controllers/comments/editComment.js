const { db_handler } = require("../../database/config/mysql.conf");


module.exports.editComment = (req, res) => {

    const { active_user_id, new_comment_text } = req.body;
    const { comment_id } = req.params;

    let sql = `UPDATE COMMENT SET comment_text = '${new_comment_text}' 
               WHERE comment_id = ${comment_id} AND author_id = ${active_user_id} ;`;


   
    db_handler.query(sql, (err) => {      
        if (err) return res.send("Error payload is set to: %s.\n", err.message);

        req.flash("success", "Comment successfuly edited.");
        return res.redirect("/home");
        // return res.send("OK.");

    })
}