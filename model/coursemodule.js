const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const coursemoduleSchema = new Schema(
  {
    
    courseId: {
      type: String,
    },
    moduleno: {
      type: Number,
    },
    moduletitle: {
      type: String,
    },
  },
  { timestamps: true }
);
const coursemodule = mongoose.model("coursemodule", coursemoduleSchema);
module.exports = coursemodule;
