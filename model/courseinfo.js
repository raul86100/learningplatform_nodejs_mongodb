const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseinfoSchema = new Schema(
  {
    courseId: { type: Number, default: 1000 },
    name: {
      type: String,
    },
    autherdetails: 
        {type: mongoose.Schema.Types.ObjectId, ref: 'autherinfo'}
    ,
    endrolleduser: {
      type: String,
    },
    completeduser: {
      type: String,
    },
    approvestatus:{
        type:Boolean,
    },
    activestatus:{
        type:Boolean,
    },
    module:[{type: mongoose.Schema.Types.ObjectId, ref: 'coursemodule'}]
  },
  { timestamps: true }
);
const courseinfo = mongoose.model("courseinfo", courseinfoSchema);
module.exports = courseinfo;
