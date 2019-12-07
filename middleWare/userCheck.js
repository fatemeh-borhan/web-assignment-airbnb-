
  const isAdmin = (req,res,next)=>
{  
    if(req.session.userInfo.type =="Admin")
    {
        next();
    }
    else
    {
        res.redirect("/user/dashboard"); 
    }

}

module.exports=isAdmin;