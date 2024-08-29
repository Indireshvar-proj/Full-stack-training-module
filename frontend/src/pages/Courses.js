import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/Footer'
const Courses = () => {
  return (
   
    <div className='ml-60 p-4 grid grid-cols-1 md:grid-cols-3  '>
    <div className='col-span-2'>
        <Banner/>
    </div>
    <div>
       Right Section
    </div>
    </div>
   
  )
}

export default Courses
