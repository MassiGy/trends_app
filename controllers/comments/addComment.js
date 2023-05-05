const { db_handler } = require("../../database/config/mysql.conf");


module.exports.addComment = (req, res) => {

    const { comment_text } = req.body;
    const { post_id } = req.params;

    let author_id= req.session.active_user_id;

    let sql =
        `INSERT INTO COMMENT (comment_text, post_id,author_id) VALUES ('${comment_text}', '${post_id}', '${author_id}');`;

    db_handler.query(sql, (err) => {

        if (err) return res.send("Error payload is set to: " + err.message);

        sql = `UPDATE POST SET post_comments_count = post_comments_count + 1 WHERE post_id = ${post_id};`;

        db_handler.query(sql, (err) => {
            if (err) return res.send("Error payload is set to: "+ err.message);
            res.send("OK.");
        })
    })
}