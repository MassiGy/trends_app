const { db_handler } = require("../../database/config/mysql.conf");


module.exports.upvotePost = (req, res) => {

    const { post_id } = req.params;
    const { active_user_id } = req.body;

    // remove the downvoting track record from the DOWNVOTE Table
    let sql = `DELETE FROM DOWNVOTE WHERE post_id = ${post_id} AND user_id = ${active_user_id};`;

    db_handler.query(sql, (err) => {
        if (err) return res.send("Error payload is set to: "+ err.message);
    })



    // add the new upvote to the UPVOTE Table, 
    sql = `INSERT INTO UPVOTE (post_id, user_id) VALUES (${post_id}, ${active_user_id}); `;


    db_handler.query(sql, (err) => {
        
        if (err) return res.send("Denied. You can not upvote the same post more then once.");

        sql = `UPDATE POST SET post_votes = post_votes + 1 WHERE post_id = ${post_id};`;

        db_handler.query(sql, (err) => {
            if (err) return res.send("Error payload is set to: "+ err.message);
            res.send("OK.");
        })
    })

}