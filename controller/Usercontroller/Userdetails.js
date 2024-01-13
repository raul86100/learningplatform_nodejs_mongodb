const usermodel = require("../../model/userinfo");
const courseinfo = require("../../model/courseinfo");

const usersignup = (req, res, next) => {
  usermodel
    .create(req.body)
    .then(() => {
      res.send("Usercreated in database");
    })
    .catch((err) => {
      console.log(err);
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const data = await usermodel.findOne({ email: email });
  if (password === data.password) {
    res.send(data);
  } else {
    res.send("invalid");
  }
};

const endrollingcall = async (req, res, next) => {
  const { email, courseId } = req.body;
  const endrollarray = await usermodel
    .findOne({ email: email })
    .then((data) => {
      return data;
    });
  const coursedetails = await courseinfo
    .findOne({ courseId: courseId })
    .then((data) => {
      return data;
    });

  endrollarray.endrolledcouse.push(coursedetails.courseId);

  await usermodel
    .updateOne(
      { email: email },
      {
        endrolledcouse: endrollarray.endrolledcouse,
      }
    )
    .then(() => {
      res.send("course endrolled successfully");
    });
};

const completingcall = async (req, res, next) => {
  const { email, courseId } = req.body;
  const userdata = await usermodel.findOne({ email: email }).then((data) => {
    return data;
  });
  var endroll = [];
  var completed = userdata.completedcourse;

  userdata.endrolledcouse.map((item, index) => {
    if (item !== courseId) {
      endroll.push(item);
    } else {
      completed.push(item);
    }
  });

  usermodel
    .updateOne(
      { email: email },
      { endrolledcouse: endroll, completedcourse: completed }
    )
    .then(() => {
      res.send("course complted");
    });
};

const showendrollcourseandcompleted = async(req, res, next) => {
  const { email } = req.body;
  
  const usercourseid =await usermodel.findOne({ email: email }).then((data) => {
    return data;
  });
  const endrollcoursedata=await courseinfo.find({courseId:usercourseid.endrolledcouse}).then((data)=>{return data})

const completedcourse=await courseinfo.find({courseId:usercourseid.completedcourse}).then((data)=>{return data})
const sendobj={endroll:endrollcoursedata,completed:completedcourse};
res.send(sendobj);
};

module.exports = {
  usersignup,
  login,
  endrollingcall,
  completingcall,
  showendrollcourseandcompleted,
};
