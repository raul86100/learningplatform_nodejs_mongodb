const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const chapterSchema=new Schema({
    name:{
type:String,unique: true 
    },
    link:{
        type:String
            }
    
   
    
},{timestamps:true});
const chapter=mongoose.model('chapterinfo',chapterSchema);
module.exports=chapter;