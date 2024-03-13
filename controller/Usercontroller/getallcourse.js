const courseinfomodel = require("../../model/courseinfo");
const modulemodel = require("../../model/coursemodule");
const chaptermodel = require("../../model/chapterinfo");
const coursemodule = require("../../model/coursemodule");
const autherinfo = require("../../model/authorinfo");
const chapter = require("../../model/chapterinfo");

const getallcourse = async (req, res, next) => {
  await courseinfomodel.find().then((data) => {
    res.json(data);
  });
};

const getbycourseId = async (req, res, next) => {
  const { courseId } = req.body;
  const couinfo = await courseinfomodel.findOne({ _id: courseId });
  const mymodule = await modulemodel.find({ courseId: courseId });
  const auther = await autherinfo.findOne({ email: couinfo.autherdetails });

  const fullcourse = await {
    coursename: couinfo.coursename,
    courseauther: { name: auther.name, email: auther.email },
    numberofmodules: mymodule.length,
    description: couinfo.Description,
    modules: [],
  };

  await mymodule.forEach(async (item, index) => {
    const newmodule = {
      title: item.moduletitle,
      chapters: [],
    };
    const chapter = await chaptermodel.find({
      moduleId: item._id,
    });
    await chapter.forEach(async (lesson) => {
      newmodule.chapters.push(lesson);
    });

    await fullcourse.modules.push(newmodule);
   if(mymodule.length===index+1){
    res.send(fullcourse);
   }
  });
 
};

module.exports = { getallcourse, getbycourseId };
