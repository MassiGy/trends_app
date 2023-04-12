const { db_handler } = require("../../database/config/mysql.conf");


module.exports.renderHome = (req, res) => {
    let sql =
        `
        SELECT 
            post_id, post_title, post_body, post_votes,P.createdAt,user_nickname, post_comments_count
        FROM 
            POST P JOIN USER U 
        ON 
            (P.author_id=U.user_id);
        ` ;


    db_handler.query(sql, (err, results) => {

        if (err) return res.send("Error payload is set to: " + err.message);

        if (!results || results.length < 1) return res.send("No trends found at this moment, come back later.");


        res.render('home', { results });

    });

};