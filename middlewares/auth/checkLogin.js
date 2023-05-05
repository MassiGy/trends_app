module.exports.checkLogin = (req, res,next) => {
    if(!req.session.active_user_email){
        return res.send("Please login to proceed.");
    }
    return next();
}