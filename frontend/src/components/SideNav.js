import React,{useEffect} from 'react'
import { BookOpen } from 'lucide-react'
import { BadgeIcon } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import {Link} from 'react-router-dom'

 


function SideNav()  {
    const menu=[
        {
            id:1,
            name:"Dashboard",
            icon:BookOpen,
            path:'/coursefiles'
        },
        {
            id:2,
            name:"All courses",
            icon:BadgeIcon,
            path:'/coursefiles'
        },
        {
            id:3,
            name:"Be Instructor",
            icon:GraduationCap,
            path:'/home'
        }
    ]
    const path="http://localhost:3000"
    useEffect(()=>{
      console.log("path",path)
    },[])
  return (
    <div className='w-60 p-5 bg-white shadow-sm border h-screen'>
      <img src ='/logo192.png' alt ='logo' width={110} height={60} />
      <hr className='mt-5'></hr>
      <div className='mt-8'>
        {
           
              
            
            <div className={` `}>
              <Link to={'/admindashboard'}>
              <div className='group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer
             hover:bg-blue-600 hover:text-white rounded-md transition-all ease-in-out duration-200 '>
                <BookOpen className='group-hover:animate-bounce'/>
                <h2>Dashboard</h2>
                </div>
                </Link>
                <Link to={'/coursefile'}>
                <div className=' group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer
             hover:bg-blue-600 hover:text-white rounded-md transition-all ease-in-out duration-200 '>
                <BadgeIcon className='group-hover:animate-bounce'/>
                <h2>All courses</h2>
                </div>
                </Link>
                
                <Link to={'/adminpage'}><div className='group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer
             hover:bg-blue-600 hover:text-white rounded-md transition-all ease-in-out duration-200 '>
                <GraduationCap className='group-hover:animate-bounce'/>
                <h2>Admin</h2>
                </div>
                </Link>
                
               
                
            </div>
        
           
        }
      </div>
    </div>
  )
}

export default SideNav
