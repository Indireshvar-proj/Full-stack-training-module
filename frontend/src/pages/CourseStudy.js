import React,{useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {CourseData} from '../context/CourseContext'
import {useNavigate} from 'react-router-dom'
const server = "http://localhost:8080"
const CourseStudy = () => {
    const params = useParams();
    const {fetchCourse,course} = CourseData();
    const navigate = useNavigate()
  
    useEffect(()=>{
       fetchCourse(params.id);
    },[]);
  return <>{course &&
    <div className='ml-60 p-4 '>
        <div className='mt-5 grid grid-cols-1 place-items-start ml-12 '>
        <div className='border w-60 rounded-lg p-2 bg-white cursor-pointer  hover:border-blue-200 hover:shadow-md hover:shadow-blue-200'onClick={()=>navigate(`/lectures/${course._id}`)}>
        <img src={`${server}/${course.image}`} className='rounded-lg'/>
        
        <h2>{course.title}</h2>
        <h2>{course.description}</h2>
        <h4>created by - {course.createdBy}</h4>
        <h4>duration-{course.duration}</h4>
        <div className='bg-blue-200 rounded-md text-center'>
      
      <Link to={`/lectures/${course._id}`}>
      <h2>Lectures</h2></Link>
      </div>
      
       </div>
      </div>
    </div>}</>;
  
}

export default CourseStudy
