import React from 'react'
import Logo from './Logo'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BellDot,Search } from 'lucide-react'
const Header = () => {
  return (
    <header className='p-4 shadow-md bg-white flex'>
      <div className='h-full container mx-auto flex px-4 justify-between'>
        <div className='flex gap-2 border p-2 rounded-md'>
           <Search className='h-5 w-5'/>
           <input type="text" placeholder='Search'  className='outline-none'/>
        </div>
        
        <div className='flex items-center gap-6'>
        <div className='flex items-center gap-4'>
          <BellDot className='text-gray-500'/>
          <div>
            <Link to={"/login"} className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>Get Started</Link>
          </div>
        </div>
          <div className='text-3xl cursor-pointer'>
          <FaRegUserCircle/>
          </div>
         
          <div>
            <Link to={"/login"} className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header