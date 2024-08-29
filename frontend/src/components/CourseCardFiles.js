import React from 'react'
const server = "http://localhost:8080"
import {useNavigate} from 'react-router-dom'
const CourseCardFiles = ({course}) =>{
  const navigate = useNavigate()
  return (
    <div className='mt-5 grid grid-cols-1 place-items-start ml-12  'onClick={()=>navigate(`/admin/${course._id}`)}>
      <div className='border w-60 rounded-lg p-2 bg-white cursor-pointer hover:border-blue-200 hover:shadow-md hover:shadow-blue-200'>
      <img src={`${server}/${course.image}`} className='rounded-lg'/>
      
      <h3>{course.title}</h3>
      <p>{course.createdBy}</p>
      <p>{course.duration}</p>
      <p>{course.price}</p>
      <div className='bg-blue-400 rounded-md text-center'>
      <button onClick={()=>navigate(`/admin/${course._id}`)} >
        <h2>get started</h2>
      </button>
      </div>
      </div>
    </div>
  );
};

export default CourseCardFiles
