const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chapterSchema = new Schema(
  {
    moduleId: {
      type:String,unique:false,
    },

    name: {
      type: String,
    },
    link: {
      type: String,
    },
    chapterno: {
      type: Number,
    },
  },
  { timestamps: true }
);
const chapter = mongoose.model("chapterinfo", chapterSchema);
module.exports = chapter;
