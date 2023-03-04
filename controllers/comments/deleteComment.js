const { db_handler } = require("../../database/config/mysql.conf");


module.exports.deleteComment= (req, res) => {

    const { active_user_id } = req.body;
    const {comment_id}=req.params;

    let sql = `SELECT * FROM COMMENT WHERE comment_id=${comment_id};`;

    db_handler.query(sql, (err, results) => {
        if (err)  return res.send("Error payload is set to: %s.\n", err.message);
        if (!results || results.length!=1) return  res.send("Error payload is set to: %s.\n", "No Comment was found wtih given data");
        if (results[0].author_id != active_user_id) return  res.send("Error payload is set to: %s.\n", "No authorised to proceed");

        sql=`DELETE FROM COMMENT WHERE comment_id=${comment_id};`;
   
       

        db_handler.query(sql, (err) => {
            if (err) return res.send("Error payload is set to: %s.\n", err.message);
            return res.send("OK.");
        })
    })
}