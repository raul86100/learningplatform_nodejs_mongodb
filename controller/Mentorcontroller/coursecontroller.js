const coursemodel = require("../../model/courseinfo");
const authermodel = require("../../model/authorinfo");
const coursemodulemodel = require("../../model/coursemodule");
const chaptermodel = require("../../model/chapterinfo");

const createcourse = async (req, res, next) => {
  const { coursename, autheremail, coursemodule ,courseprice} = req.body;
  // const autherdetails= await authermodel.findOne({email:autheremail});
  const course = await coursemodel.create({
    coursename: coursename,
    autherdetails: autheremail,
    courseprice:courseprice,
    endrolleduser: [],
    completeduser: [],
    approvestatus: false,
    activestatus: false,
  });
//   console.log(course);
  coursemodule.map(async (item, index) => {
    const tempmodule = await coursemodulemodel.create({
      courseId: course.courseId,
      moduleno: index + 1,
    });
    // console.log(tempmodule);
    item.module.map(async (chapteritem, no) => {
      await chaptermodel.create({
        moduleno: tempmodule.moduleno,
        courseId: tempmodule.courseId,
        name: chapteritem.name,
        link: chapteritem.link,
        chapterno:no+1
      });
    });
  });

  res.send("course created successfully");
};
module.exports = { createcourse };
