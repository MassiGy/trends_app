const { db_handler } = require("../../database/config/mysql.conf");


module.exports.viewComment = (req, res) => {

    let  {comment_id}=req.params;

    let sql =
        `SELECT * FROM COMMENT WHERE comment_id=${comment_id};`;

    db_handler.query(sql, (err,results) => {

        if (err) return res.send("Error payload is set to: "+ err.message);
        if(!results || results.length!=1) return  res.send("Error payload is set to: No comment was found with that given data. ");

        res.json(results);
    })
}