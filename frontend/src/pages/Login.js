import React, { useState } from 'react'
import loginIcons from '../asset/signin.gif'
import { IoIosEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { json, Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [data,SetData] = useState({
        email :"",
        password : ""
    })
    const handleOnChange = (e) =>{
        const { name, value } = e.target

        SetData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault()
    const dataResponse = await fetch("http://localhost:8080/api/signin",{
        method : SummaryApi.signIn.method,
        credentials : "include",
        headers :{
             "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    const dataApi = await dataResponse.json()
       if(dataApi.success){
        toast.success(dataApi.message)
        navigate("/coursefile")
       }
       if(dataApi.error){
        toast.error(dataApi.message)
       }
    }
    console.log("data login",data)
  return (
    <section id="login">
        <div className='mx-auto container p-4'>
            <div className='bg-white p-4 py-5 w-full max-w-sm mx-auto rounded'>
                 <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt="login icons"/>
                 </div>
                 <form className='pt-5 flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label>Email:</label>
                        <div className='bg-slate-100 p-2'>
                        <input type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input type={showPassword ? "text" :"password"} placeholder="Enter Password" name="password" value={data.password} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (<IoMdEyeOff/>):(<IoIosEye/>)
                                }
                                
                            </span>
                        </div>
                        </div>
                        <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                              Forgot password
                        </Link>
                    </div>
                    <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
                 </form>
                 <p className='mt-5'>Dont have account ? <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login
