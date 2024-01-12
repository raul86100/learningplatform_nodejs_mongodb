const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userinfoSchema=new Schema({
    email:{
type:String,unique: true 
    },
    name:{
       type:String 
    },
    password:{
        type:String
    },
    mobile:{
type:String,unique: true
    },
    role:{
        type:String
    },
    endrolledcouse:[{type:Schema.Types.Mixed}],
    completedcourse:[{type:String}]
    
},{timestamps:true});
const userinfo=mongoose.model('userinfo',userinfoSchema);
module.exports=userinfo;