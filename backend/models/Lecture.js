const mongoose =require('mongoose')
const Courses = require("./courses.js")
const schema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    description:{
        type:String,
        required: true,
    },
    video: {
        type:String,
        required: true,
    },
    Course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses",
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
});
const Lecture = mongoose.model("Lecture",schema);
module.exports = Lecture