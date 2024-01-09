const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userinfoSchema=new Schema({
    userId:{
type:String
    },
    name:{
       type:String 
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    
},{timestamps:true});
const userinfo=mongoose.model('userinfo',userinfoSchema);
module.exports=userinfo;