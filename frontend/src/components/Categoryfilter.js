"use client"
import React, { useState } from 'react'

function Categoryfilter({selectedCategory}) {
  
    const [activeIndex,setActiveIndex]=useState(0);
    const filterOptions=[
        {
           id:1,
           name:'All',
           value:'all'
        },
        {
            id:2, 
            name:'React Js',
            value:'reacts'
        },
        {
            id:3,
            name:'Nodejs',
            value:'nodejs'
        }
    ]
  return (
    <div className='flex gap-5 p-4'>
       {filterOptions.map((item,index)=>(
        <button key = {index} onClick={()=>{setActiveIndex(index);selectedCategory(item.value)}} className={`border p-2 px-4 text-sm rounded-md hover:border-blue-600 font-semibold hover:bg-gray-50 ${activeIndex==index? 'border-blue-600 bg-blue-50 text-blue-600 ':null}`}>
           <h2>{item.name}</h2>
        </button>
       ))}
    </div>
  )
}

export default Categoryfilter
