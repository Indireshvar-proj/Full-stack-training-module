const axios = require('axios');
const {createContext,useContext,useState} = require('react');
const CourseContext = createContext();
export const CourseContextProvider = ({children}) => {
    const [courses, setCourses] = useState([])
    async function fetchCourses () {
        try{
            const{data} = await axios.get(`${server}/api/course/all`)
        }catch(err){
            console.log(err);
        }
    }
    return <CourseContext.Provider value={{}}>{children}</CourseContext.Provider>
};
export const CourseData = () => useContext(CourseContext);

