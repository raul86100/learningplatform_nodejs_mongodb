const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const addresschema=new Schema({
    userId:{
type: mongoose.Schema.Types.ObjectId,ref: 'userinfo' 
    },
    address:{
       type:String 
    }
    
},{timestamps:true});
const addressmodel =mongoose.model('AddressSchema',addresschema);
module.exports=addressmodel;