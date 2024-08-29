const express =require('express')
const {getAllCourses,getSingleCourse,fetchLectures,fetchLecture} = require("../controller/Courses.js")

const router = express.Router();
router.get("/course/all",getAllCourses);
router.get("/course/:id",getSingleCourse);
router.get("/lectures/:id",fetchLectures);
router.get("/lecture/:id",fetchLecture);
router.get("/admin/:id",fetchLectures);
module.exports = router