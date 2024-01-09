const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const authorinfoSchema=new Schema({
    email:{
type:String,unique: true 
    },
    password:{
        type:String
            },
    name:{
       type:String 
    },
    mobile:{
        type:String,unique:true
    }
   
    
},{timestamps:true});
const autherinfo=mongoose.model('autherinfo',authorinfoSchema);
module.exports=autherinfo;