import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const server="http://localhost:8080"
const Dashboard = ({  }) => {
  const navigate = useNavigate();

  

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      
        <div className=" ml-60 main-content bg-white mt-3 p-4">
          <div className="box">
            <p className="font-bold text-[20px]">Total Courses</p>
            <p>{stats.totalCourses}</p>
          </div>
          <div className="box">
            <p className="font-bold text-[20px]">Total Lectures</p>
            <p>{stats.totalLectures}</p>
          </div>
         
        </div>
      
    </div>
  );
};

export default Dashboard;
