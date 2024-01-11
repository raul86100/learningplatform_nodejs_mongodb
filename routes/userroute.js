const {Router}=require('express')
const controller=require('../controller/Usercontroller/getallcourse')


const router=Router();

router.get('/getallcourse',controller.getallcourse)
router.get('/getbycourseId',controller.getbycourseId)
router.post('/endrollcourse')
router.post('/completed')

router.get("/getuserdetails")
router.post("/createprofile")


module.exports=router;