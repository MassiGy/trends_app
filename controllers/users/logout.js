module.exports.logout = (req, res) => {
    
    if(!req.session.active_user_email){
        return res.send("Already logged out!");
    }

    req.session.active_user_email = null;

    return res.send("Successfuly logged out.");
}