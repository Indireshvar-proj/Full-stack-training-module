import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import Loading from "../components/Loading"
import VideoPlayer from '../components/video.js'
import videojs from 'video.js'


import 'video.js/dist/video-js.css';

import {render} from 'react-dom'
import Helmet from 'react-helmet'
import Categoryfilter from '../components/Categoryfilter'
import VideoJS from '../components/videopages.js'

const server = "http://localhost:8080"



const Lecture = ({})=> {
  const playerReference = React.useRef(null);
    const[activeIndex,setActiveIndex]=useState(0);
    const [lectures, setLectures] = useState([])
    const [lecture,setLecture] = useState([])
    const [loading,setLoading] = useState(true)
    const [lecLoading,setLecLoading] = useState(true)
    const params = useParams()
    const [show, setShow] = useState(false);
  
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  
  const [completed, setCompleted] = useState("");
  const [completedLec, setCompletedLec] = useState("");
  const [lectLength, setLectLength] = useState("");
  const [progress, setProgress] = useState([]);
  
    async function fetchLectures () {
        try{
            const {data} = await axios.get(`${server}/api/lectures/${params.id}`);
            setLectures(data.lectures)
            setLoading(false)
        }catch(err){
            console.log(err);
            setLecLoading(false);
        }
    }
    async function fetchLecture (id) {
        setLecLoading(true);
        try{
            const {data} = await axios.get(`${server}/api/lecture/${id}`);
            setLecture(data.lecture)
            setLoading(false)
        }catch(err){
            console.log(err);
            setLecLoading(false);
        }
    }
    
    useEffect(()=>{
        
        fetchLectures();
        
       
    },[]);
    

    async function fetchProgress() {
      try {
        const { data } = await axios.get(
          `${server}/api/course/progress?course=${params.id}`,
          
        );
  
        setCompleted(data.courseProgressPercentage);
        setCompletedLec(data.completedLectures);
        setLectLength(data.allLectures);
        setProgress(data.progress);
      } catch (error) {
        console.log(error);
      }
    }
   
    const addProgress = async (id) => {
      try {
        
        const { data } = await axios.post(
          `${server}/api/course/progress/?course=${params.id}&lectureId=${id}`
          
          
        );
        console.log("added course",data.message);
        fetchProgress();
      } catch (error) {
        console.log(error);
      }
    };
    
    
  
    console.log(progress);
    useEffect(()=>{
     
    
      fetchProgress();
      
     
  },[]);
  const videoJsOptions = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  responsive:true,
  width: 700,
  height: 400,
  controls: true,
  sources: [
    {
      src: 'https://www.tutorialspoint.com/videos/sample720.mp4',
      type: 'video/mp4',
    },
  ],
};


  return <>{
    
    <div className='ml-60 flex justify-between '>
       <div className="progress">
        
            Lecture completed - {completedLec} out of total lectures{} <br />
            <progress value={completed} max={100}></progress> {} %
          </div>
        <div className='w-3/4 p-4 bg-slate-50 rounded-lg mt-3' >
       <div>
       
       <video src={`${server}/${lecture.video}`}  width={"100%"} controlsList="no timeline no download noremoteplayback" disablePictureInPicture disableRemotePlayback autoPlay onEnded={() => addProgress(lecture._id)}></video>
      </div>
      <link href="https://vjs.zencdn.net/7.19.2/video-js.css" rel="stylesheet" />
      
      <script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>
      <script>
       
      </script>
      
              <h1>{lecture.title}</h1>
              <h3>{lecture.description}
                
                </h3>  <h1>Please select a lecture</h1>
            </div>
            <div className='w-2/5 p-4 ml-10 mr-20 bg-white rounded-lg mt-3'>
            
                {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <><div>
                    <div 
                      onClick={() => fetchLecture(e._id) && setActiveIndex(i)}
                      key={i}
                      className={`flex gap-2 text-blue-600 p-4 hover:bg-blue-300 cursor-pointer ${
                        lecture._id === e._id && "active" && activeIndex==i?'bg-green-100 text-green-700':null
                      }`}
                      >
                    
                      {i + 1}. {e.title}{" "}
                      {progress[0] &&
                        progress[0].completedLectures.includes(e._id) && (
                            <span
                            style={{
                              background: "red",
                              padding: "2px",
                              borderRadius: "6px",
                              color: "greenyellow",
                            }}
                          >
                            
                          </span>
                        )}
                    </div>
                    </div>
                    
                  </>
                ))
              ) : (
                <p>No Lectures Yet!</p>
              )}
              </div>               
                
      
    </div>}</>;
    
    
                      
            
}

export default Lecture
