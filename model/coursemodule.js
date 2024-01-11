const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto=require('crypto');
const { type } = require("os");
const coursemoduleSchema = new Schema(
  {
    moduleId: { type:String ,default:crypto.randomBytes(48).toString('hex')},
    // chapterId: [{ type: mongoose.Schema.Types.ObjectId, ref: "chapterinfo" }],
    courseId: {
      type:String,
    },
    moduleno:{
      type:Number
    }
  },
  { timestamps: true }
);
const coursemodule = mongoose.model("coursemodule", coursemoduleSchema);
module.exports = coursemodule;
