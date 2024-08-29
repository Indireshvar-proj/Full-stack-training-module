const mongoose =require('mongoose')
const schema = new mongoose.Schema({
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    },
    completedLectures:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Lecture",
        }
    ],
},
    {
      timestamps:true,
    }
);
const Progress = mongoose.model("Progress",schema)
module.exports = Progress
