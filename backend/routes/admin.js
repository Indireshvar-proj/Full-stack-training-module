const express =require ('express')
const createCourse = require("../controller/admin.js");
const uploadFiles = require("..middleware/multer.js");
const addLectures = require("../controller/admin.js");
const deleteLecture = require("../controller/admin.js");
const router = express.Router();

router.post("/course/new", uploadFiles,createCourse);
router.post("/course/:id", uploadFiles,addLectures);
router.delete("/lecture/:id",deleteLecture);
module.exports = router;