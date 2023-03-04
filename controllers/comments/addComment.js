const { db_handler } = require("../../database/config/mysql.conf");


module.exports.addComment = (req, res) => {

    const { comment_text, author_id } = req.body;
    let  {post_id}=req.params;

    let sql =
        `INSERT INTO COMMENT (comment_text, post_id,author_id) VALUES ('${comment_text}', '${post_id}', '${author_id}');`;

    db_handler.query(sql, (err) => {

        if (err) return res.send("Error payload is set to: %s.\n", err.message);
        res.send("OK.");
    })
}