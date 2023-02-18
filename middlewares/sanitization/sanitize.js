
module.exports.sanitize = (req, res, next) => {
    
    Object.keys(req.body).forEach(key => {
        req.body[String(key)] = req.body[String(key)].replace(/['`";\$%\*]/g, "_");
    });
    next();
}