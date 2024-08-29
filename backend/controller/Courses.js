const Courses = require("../models/courses.js")
const Lecture = require("../models/Lecture.js")
const Progress = require("../models/progress.js") 

async function getAllCourses (req,res){
    try{
      const courses = await Courses.find();
      res.json({
        courses,
      })
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}


async function getSingleCourse (req,res){
    try{
      const course = await Courses.findById(req.params.id);
      await Progress.create({
        course: course._id,
        completedLectures: [],
        
      });
     
     res.json({
        course,
     })
     
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}


async function fetchLectures (req,res){
    try{
      
      const lectures = await Lecture.find({Course:req.params.id})
      res.json({lectures});
      
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}


async function fetchLecture (req,res){
    try{
      const lecture = await Lecture.findById(req.params.id);
      return res.json({lecture});
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
     })
    }
}


async function addProgress (req,res){

  
  const progress = await Progress.findOne({
    course: req.query.course,
  });
  const {lectureId} = req.query;

  if(progress){
    return res.json({
      message: "Progress recorded",
    });
  }

  progress.completedLectures.push(lectureId);

  await progress.save()

  res.status(201).json({
    message: "new Progress added",
  });
}

async function getYourProgress (req, res) {
  const progress = await Progress.find({
    course: req.query.course
  });

  if (!progress) return res.status(404).json({ message: "null" });

  const allLectures = (await Lecture.find({ course: req.query.course })).length;

  const completedLectures = (await Progress.find({ course: req.query.course})).length;

  const courseProgressPercentage = (completedLectures * 100) / allLectures;

  res.json({
    courseProgressPercentage,
    completedLectures,
    allLectures,
    progress,
  });
}
module.exports = {getAllCourses,getSingleCourse,fetchLectures,fetchLecture,addProgress,getYourProgress}
