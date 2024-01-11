const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const chapterSchema=new Schema({
    moduleno:{
        type:Number
    },
    courseId:{
type:String
    },
    name:{
type:String
    },
    link:{
        type:String
            },
            chapterno:{
                type:Number
            }

    
   
    
},{timestamps:true});
const chapter=mongoose.model('chapterinfo',chapterSchema);
module.exports=chapter;