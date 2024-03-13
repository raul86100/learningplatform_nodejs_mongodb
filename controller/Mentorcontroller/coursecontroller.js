const coursemodel = require("../../model/courseinfo");
const authermodel = require("../../model/authorinfo");
const coursemodulemodel = require("../../model/coursemodule");
const chaptermodel = require("../../model/chapterinfo");

const createcourse = async (req, res, next) => {
  const { coursename, autheremail, coursemodule ,courseprice,Description} = req.body;
  // const autherdetails= await authermodel.findOne({email:autheremail});
  const course = await coursemodel.create({
    coursename: coursename,
    autherdetails: autheremail,
    courseprice:courseprice,
    endrolleduser: [],
    completeduser: [],
    approvestatus: false,
    activestatus: false,
    Description:Description
  });

  await coursemodule.map(async (item, index) => {
    const tempmodule = await coursemodulemodel.create({
      courseId: course._id,
      moduleno: index + 1,
      moduletitle:item.title
    });
   
   await item.chapter.forEach(async (chapteritem, no) => {
      await chaptermodel.create({
        moduleId: tempmodule._id,
        name: chapteritem.name,
        link: chapteritem.link,
        chapterno:no+1
      });
    });
  });

  res.send("course created successfully");
};
module.exports = { createcourse };
