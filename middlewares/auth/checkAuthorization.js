module.exports.checkAuthorization = (req,res,next) =>{
   
    if(!req.session?.active_user_email){
        return res.send("Please log in to proceed.");
    }
  
    if(req.session.active_user_id == req.params?.user_id){
        return next();
    }else{
        return res.status(401).send("Not authorized.");
    }
    
}