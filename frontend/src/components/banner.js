import React from 'react'

function Banner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <img src='./logo192.png'/>
      <div>
        <h2 className='font-bold text-[27px]'>Explore the courses here</h2>
      </div>
    </div>
  )
}

export default Banner
