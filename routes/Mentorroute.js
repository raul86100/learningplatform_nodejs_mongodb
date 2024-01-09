const {Router}=require('express')
const mentorrouter=Router();

mentorrouter.post("/mentorsignup",require('../controller/Mentorcontroller/mentorprofile').mentorsignup)
// mentorrouter.post("/createcourse",)


module.exports=mentorrouter