const { db_handler } = require("../../database/config/mysql.conf");


module.exports.editPost = (req, res) => {

    const { new_post_title, new_post_body } = req.body;
    const { post_id } = req.params; 

    let sql =
        `SELECT * FROM POST WHERE post_id = '${post_id}';`;

    db_handler.query(sql, (err,results) => {

        if (err) return res.send("Error payload is set to: "+ err.message);
        
        if (!results || results.length != 1) return res.send("No post was found with the given data.");

        sql = `UPDATE POST SET post_title='${new_post_title}',post_body='${new_post_body}' WHERE post_id = ${post_id};`;
        
        db_handler.query(sql,(err)=>{
            if(err) return res.send("Error payload is set to: "+ err.message);
            return res.send("OK.");
        });
    })
}