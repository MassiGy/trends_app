const { db_handler } = require("../../database/config/mysql.conf");


module.exports.editComment = (req, res) => {

    const { new_comment_text } = req.body;
    const { comment_id } = req.params;

    const active_user_id = req.session.active_user_id;


    let sql = `UPDATE COMMENT SET comment_text = '${new_comment_text}' 
               WHERE comment_id = ${comment_id} AND author_id = ${active_user_id} ;`;

    db_handler.query(sql, (err) => {      
        if (err) return res.send("Error payload is set to:"+ err.message);
        return res.send("OK.");
    })
}