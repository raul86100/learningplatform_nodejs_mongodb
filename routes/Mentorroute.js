const {Router}=require('express')
const mencontroller=require('../controller/Mentorcontroller/mentorprofile');
const coursecontroller=require('../controller/Mentorcontroller/coursecontroller')
const mentorrouter=Router();

mentorrouter.post("/mentorsignup",mencontroller.mentorsignup)
mentorrouter.post("/createcourse",coursecontroller.createcourse)


module.exports=mentorrouter