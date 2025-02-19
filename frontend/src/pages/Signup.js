import React, { useState } from 'react'
import loginIcons from "../asset/signin.gif"
import { IoIosEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Await, Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Signup = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [showConfirmPassword,setShowConfirmPassword]= useState(false)
    const [data,SetData] = useState({
        email :"",
        password : "",
        name :"",
        confirmPassword :"",
        profilePic :"",
    })
    const navigate = useNavigate()
    const handleOnChange = (e) =>{
        const { name, value } = e.target

        SetData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleUploadPic = async(e) =>{
        const file = e.target.files[0]
        const imagePic = await imageTobase64(file)
        console.log("imagePic",imagePic)
        SetData((preve)=>{
            return{
                ...preve,
                profilePic : imagePic
            }
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()

        if (data.password === data.confirmPassword){
            console.log("SummaryApi.signUP.url",SummaryApi.signUP.url)
            const dataResponse = await fetch("http://localhost:8080/api/signup",{
                method : SummaryApi.signUP.method,
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
    
            const dataApi = await dataResponse.json()
            
            if (dataApi.success){
                toast.success(dataApi.message) 
                navigate("/login")
            }
            if(dataApi.error){
                toast.error(dataApi.message)
            }  

            console.log("data",dataApi)
        }else{
            console.log("Please check password and confirm password")
        }
        
    }
    console.log("data login",data)
  return (
    <section id="signup">
    <div className='mx-auto container p-4'>
        <div className='bg-white p-4 py-5 w-full max-w-sm mx-auto rounded'>
             <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                <img src={data.profilePic || loginIcons} alt="login icons"/>
                </div>
                <form>
                    <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Upload Photo
                </div>
                <input type='file'className='hidden' onChange={handleUploadPic}/>
                </label>
                </form>
             </div>
             <form className='pt-5 flex flex-col gap-2' onSubmit={handleSubmit}>
             <div className='grid'>
                    <label>Name:</label>
                    <div className='bg-slate-100 p-2'>
                    <input type="text" placeholder="Enter your name" name="name" value={data.name} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent' required/>
                    </div>
                </div>
                <div className='grid'>
                    <label>Email:</label>
                    <div className='bg-slate-100 p-2'>
                    <input type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent' required/>
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
                   
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                    <input type={showConfirmPassword ? "text" :"password"} placeholder="Enter Confirm password" name="confirmPassword" value={data.confirmPassword} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent'/>
                    <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                        <span>
                            {
                                showConfirmPassword ? (<IoMdEyeOff/>):(<IoIosEye/>)
                            }
                            
                        </span>
                    </div>
                    </div>
                   
                </div>
                <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Signup</button>
             </form>
             <p className='mt-5'>Already have account ? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
        </div>
    </div>
</section>
  )
}

export default Signup