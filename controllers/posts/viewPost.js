const { db_handler } = require("../../database/config/mysql.conf");


module.exports.viewPost = (req, res) => {

    const { post_id } = req.params;

    let sql =
        `SELECT * FROM POST WHERE post_id = ${post_id};`;

    db_handler.query(sql, (err, results) => {

        if (err) return res.send("Error payload is set to: %s.\n", err.message);

        if (!results || results.length != 1) return res.send("No post was found with the given data.");

        return res.json(results);
    })
}