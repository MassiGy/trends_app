const { db_handler } = require("../../database/config/mysql.conf");


module.exports.viewPostComments = (req, res) => {

    const { post_id } = req.params;

    let sql =
        `SELECT comment_text,user_nickname ,C.createdAt,P.post_id,P.post_body,P.post_title,P.post_votes
        FROM COMMENT C JOIN POST P USING (post_id) JOIN USER U ON (P.author_id=U.user_id)
        WHERE post_id=${post_id}; `;

    db_handler.query(sql, (err, results) => {

        if (err) return res.send("Error payload is set to: %s.\n", err.message);

        if (!results || results.length < 1) return res.send("No comments  was found with the given data.");

       
      
       res.render('postComments',{results});
    })
}














