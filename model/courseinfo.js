const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require('crypto');


const courseinfoSchema = new Schema(
  {
    coursename: {
      type: String,
    },
    courseprice:{type:Number},
    autherdetails: {type:String }
        
    ,
    Description:{type:String},
    endrolleduser: [{
      type: String
    }],
    completeduser: [{
      type: String
    }],
    approvestatus:{
        type:Boolean,
    },
    activestatus:{
        type:Boolean,
    },
    // module:[{type: mongoose.Schema.Types.ObjectId, ref: 'coursemodule'}]
  },
  { timestamps: true }
);
const courseinfo = mongoose.model("courseinfo", courseinfoSchema);
module.exports = courseinfo;
