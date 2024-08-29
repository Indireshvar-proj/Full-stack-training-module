import React from "react";
import { CourseData } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import Categoryfilter from "../components/Categoryfilter";
const Coursesfile = () => {
     const {courses} = CourseData()
     console.log(courses);
     
     return (<div className="ml-60 p-4">
        <h2 className="text-blue-600 font-bold text-[27px]">Courses</h2>
        <div>
            <Categoryfilter />
        </div>
        <div className="flex bg-white rounded-lg p-4 h-screen">
            {
                courses && courses.length>0 ? courses.map((e)=>(
                    
                    <CourseCard key={e._id} course={e}/>
                )) : <p>No courses yet!</p>
            }
        </div>
        </div>);
};
export default Coursesfile;