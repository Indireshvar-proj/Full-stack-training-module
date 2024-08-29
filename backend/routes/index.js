const express = require('express')
const router = express.Router()
const userSignUpController = require("../controller/userSignUp")
const userSignInController = require("../controller/userSignIn")
const userDetailsController = require("../controller/userDetails")
const authToken = require("../middleware/authToken")
const uploadFiles = require("../middleware/multer.js")
const {Courses,addProgress,getYourProgress} = require("../controller/Courses.js")
const {createCourse,addLectures,getAllStats} = require("../controller/admin.js")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.post("/course/new", uploadFiles,createCourse)
router.post("/course/:id",uploadFiles,addLectures)
router.post("/course/progress",addProgress)
router.get("/course/progress",getYourProgress)
router.get("/stats",getAllStats)
router.get("/user-details",authToken,userDetailsController)
module.exports = router