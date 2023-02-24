const { db_handler } = require("../../database/config/mysql.conf");


module.exports.addPost = (req, res) => {

    const { post_title, post_body, author_id } = req.body;

    let sql =
        `INSERT INTO POST (post_title, post_body, author_id) VALUES ('${post_title}', '${post_body}', '${author_id}');`

    db_handler.query(sql, (err) => {

        if (err) return res.send("Error payload is set to: %s.\n", err.message);
        res.send("OK.");
    })
}