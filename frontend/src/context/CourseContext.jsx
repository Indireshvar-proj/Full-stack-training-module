import axios from 'axios'
import {createContext,useContext,useState,useEffect} from 'react'
const CourseContext = createContext();
const server = "http://localhost:8080"
export const CourseContextProvider = ({children}) => {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);
    async function fetchCourses () {
        try{
            const{data} = await axios.get(`${server}/api/course/all`)
            setCourses(data.courses);
        }catch(err){
            console.log(err);
        }
    }
    async function fetchCourse(id){
        try{
            const {data} = await axios.get(`${server}/api/course/${id}`);
            setCourse(data.course);
        }catch(err){
            console.log(err);
        }
    }
    async function fetchMyCourse(){
        try{
            const{data} = await axios.get(`${server}/api/course`)
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetchCourses()
    },[])
    return (<CourseContext.Provider value={{courses,fetchCourses,fetchCourse,course}}>{children}</CourseContext.Provider>);
};
export const CourseData = () => useContext(CourseContext);