const courseinfomodel = require("../../model/courseinfo");
const modulemodel = require("../../model/coursemodule");
const chaptermodel = require("../../model/chapterinfo");
const coursemodule = require("../../model/coursemodule");
const autherinfo=require("../../model/authorinfo")

const getallcourse = async (req, res, next) => {
  await courseinfomodel.find().then((data) => {
    res.json(data);
  });
};

const getbycourseId = async (req, res, next) => {
  const { courseId } = req.body;
  const couinfo = await courseinfomodel.findOne({ courseId: courseId });
  const mymodule = await modulemodel.find({ courseId: courseId });
  const auther=await autherinfo.findOne({email:couinfo.autherdetails});

  const fullcourse = await {
    coursename: couinfo.coursename,
    courseauther:{name:auther.name,email:auther.email} ,
    numberofmodules:mymodule.length,
    module: [],
  };

  await mymodule.map(async (item, index) => {
    const chapter = await chaptermodel.find({
      courseId: item.courseId,
      moduleno: item.moduleno,
    });
   await chapter.map(async (lesson, inx) => {
      fullcourse.module.push(lesson);
      if(mymodule.length===index+1 && chapter.length===inx+1){
         res.send(fullcourse);
      }

    });


  })
  
};

module.exports = { getallcourse, getbycourseId };
