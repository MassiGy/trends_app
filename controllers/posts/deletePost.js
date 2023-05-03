const { db_handler } = require("../../database/config/mysql.conf");


module.exports.deletePost = (req, res) => {

    const { post_title, active_user_id } = req.body;

    let sql =
        `SELECT * FROM POST WHERE post_title = '${post_title}';`;

    db_handler.query(sql, (err, results) => {

        if (err) return res.send("Error payload is set to: "+err.message);

        if (!results || results.length != 1) return res.send("No post was found with the given data.");

        if (!(results[0].author_id == active_user_id)) return res.send("Not authorised to processed.");

        sql = `DELETE FROM POST WHERE post_title= '${post_title}';`;

        db_handler.query(sql, (err) => {
            if (err) return res.send("Error payload is set to: "+err.message);
            return res.send("OK.");
        })
    })
}