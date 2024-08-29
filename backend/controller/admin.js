const TryCatch = require("../middleware/TryCatch.js")
const Courses = require("../models/courses.js")
const Lecture = require("../models/Lecture.js")
async function createCourse (req,res){
    try{
    const {title,description,category,createdBy,duration,price} = req.body;
    const image = req.file;
    await Courses.create({
        title,
        description,
        category,
        createdBy,
        image: image?.path,
        duration,
        price,
    });
    res.status(201).json({
        message: "Course Created Successfully",
    })}
    catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}



async function addLectures (req,res){
     try{
     const course = await Courses.findById(req.params.id);
     if(!course) return res.status(404).json({
        message:"No course with this id",
     });
     const {title,description} = req.body
     const file = req.file
     const lecture = await Lecture.create({
        title,
        description,
        video : file?.path,
        Course : course._id,

     });
     res.status(201).json({
        message: "Lecture Added",
        lecture,
     });
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
     }
}

async function deleteLecture (req, res){
    try{
    const lecture = await Lecture.findById(req.params.id);
  
    rm(lecture.video, () => {
      console.log("Video deleted");
    });


    await lecture.deleteOne();
  
    res.json({ message: "Lecture Deleted" });
  }
  catch(err){
    console.log(err)
    }
}


 
async function getAllStats (req,res){
    try{
    const totalCourses = (await Courses.find()).length;
    const totalLectures = (await Lecture.find()).length;

    const stats={
        totalCourses,
        totalLectures,
    };
    res.json({
        stats,
    });
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}
 module.exports = {createCourse,addLectures,getAllStats,deleteLecture}
