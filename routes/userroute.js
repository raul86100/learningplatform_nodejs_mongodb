const {Router}=require('express')
const controller=require('../controller/Usercontroller/getallcourse')
const usercontroller=require('../controller/Usercontroller/Userdetails')


const router=Router();

router.get('/getallcourse',controller.getallcourse)
router.get('/getbycourseId',controller.getbycourseId)
router.post('/endrollingcourse',usercontroller.endrollingcall)
router.post('/completingcourse',usercontroller.completingcall)

router.get("/getuserdetails")
router.post("/signup",usercontroller.usersignup)
router.post("/login",usercontroller.login)
router.get("/showendrollcourseandcompleted",usercontroller.showendrollcourseandcompleted)


module.exports=router;