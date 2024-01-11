const usermodel=require('../../model/userinfo')



const usersignup=(req,res,next)=>{
    usermodel.create(req.body).then(()=>{res.send("Usercreated in database")}).catch((err)=>{console.log(err)});

}

const login=async(req,res,next)=>{
    const {email,password}=req.body;
   const data=await usermodel.findOne({email:email});
   if(password===data.password){
    res.send("authorized to accesss");
   }
   else{
   res.send("invalid");}
}


const endrollingcall=(req,res,next)=>{

}

const completingcall=(req,res,next)=>{

}

module.exports={usersignup,login,endrollingcall,completingcall}