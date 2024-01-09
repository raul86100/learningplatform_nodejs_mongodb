const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coursemoduleSchema = new Schema(
  {
    chapterId: [{ type: mongoose.Schema.Types.ObjectId, ref: "chapterinfo" }],
  },
  { timestamps: true }
);
const coursemodule = mongoose.model("coursemodule", coursemoduleSchema);
module.exports = coursemodule;
