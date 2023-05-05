
module.exports.sanitize = (req, res, next) => {

    Object.keys(req.body).forEach(key => {
        if (isNaN(req.body[String(key)])) // if it is a string
        {
            req.body[String(key)] = req.body[String(key)].replace(/['`";\$%\*]/g, "_");
        }
    });

    Object.keys(req.params).forEach(key => {
        if (isNaN(req.params[String(key)]))   // if it is a string 
        {
            req.params[String(key)] = req.params[String(key)].replace(/['`";\$%\*]/g, "_");
        }

    });


    next();
}