import React,{useState} from "react";
import { CourseData } from "../context/CourseContext";
import CourseCardFiles from "../components/CourseCardFiles";
import Categoryfilter from "../components/Categoryfilter";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"
const server ="http://localhost:8080"
const AdminPage = () => {
    const { courses, fetchCourses } = CourseData();
     console.log(courses);
     
     const categories = [
        "Web Development",
        "App Development",
        "Game Development",
        "Data Science",
        "Artificial Intelligence",
      ];
      



    const navigate = useNavigate();
  
    
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [duration, setDuration] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);
  
    const changeImageHandler = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    };
  
   
  
    const submitHandler = async (e) => {
      e.preventDefault();
      setBtnLoading(true);
  
      const myForm = new FormData();
  
      myForm.append("title", title);
      myForm.append("description", description);
      myForm.append("category", category);
      myForm.append("price", price);
      myForm.append("createdBy", createdBy);
      myForm.append("duration", duration);
      myForm.append("file", image);
  
      try {
        const { data } = await axios.post(`${server}/api/course/new`, myForm, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
  
        toast.success(data.message);
        setBtnLoading(false);
        await fetchCourses();
        setImage("");
        setTitle("");
        setDescription("");
        setDuration("");
        setImagePrev("");
        setCreatedBy("");
        setPrice("");
        setCategory("");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  
    return (
        
      <div className="ml-60">
        <div className="p-4">
        <h2 className="text-center">All Courses</h2>
      
        <div className="flex bg-slate-50 ">
            {
                courses && courses.length>0 ? courses.map((e)=>(
                    
                    <CourseCardFiles key={e._id} course={e}/>
                )) : <p>No courses yet!</p>
            }
        </div>
        </div>
       
          <div className="ml-20 bg-slate-50 flex justify-center">
            <div className="add-course">
              <div className="course-form">
                <h2>Add Course</h2>
                <form onSubmit={submitHandler}>
                  <label htmlFor="text">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
  
                  <label htmlFor="text">Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
  
                  <label htmlFor="text">Price</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
  
                  <label htmlFor="text">createdBy</label>
                  <input
                    type="text"
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    required
                  />
  
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value={""}>Select Category</option>
                    {categories.map((e) => (
                      <option value={e} key={e}>
                        {e}
                      </option>
                    ))}
                  </select>
  
                  <label htmlFor="text">Duration</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
  
                  <input type="file" required onChange={changeImageHandler} />
                  {imagePrev && <img src={imagePrev} alt="" width={300} />}
  
                  <button
                    type="submit"
                    disabled={btnLoading}
                    className="common-btn"
                  >
                    {btnLoading ? "Please Wait..." : "Add"}
                  </button>
                </form>
              </div>
            </div>
          
        </div>
        </div>
      
    );
  };
  
  export default AdminPage;
  
