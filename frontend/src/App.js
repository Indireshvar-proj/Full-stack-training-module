
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import SideNav from './components/SideNav';
import VideoPlayer from './components/video.js';


function App() {

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch("http://localhost:8080/api/user-details",{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
    console.log("data-user",dataResponse)
  }
  useEffect(()=>{
    /**user Details*/
    fetchUserDetails()
  },[])
  
  return (
    <>
    <ToastContainer />
    
    
      <div className='w-64 sm-block fixed'>
      <SideNav/>
      
      </div>
      <div className='ml-60'>
        <Header/>
        
      </div>
      <div className='ml-60'>
      
      </div>
      <main className='min-h-[calc(100vh-120px)] '>
      
       <Outlet/>
      </main>
    
      <Footer/>
      
    </>
  );
}

export default App;
