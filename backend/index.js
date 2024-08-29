const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes')
var cookieParser = require('cookie-parser')
const connectDB = require("./config/db")
const courseRoutes = require('./routes/Courses.js')

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials :true
}))
app.use("/uploads",express.static("uploads"));
app.use(express.json())
app.use("/api",router)
app.use(cookieParser())
app.use("/api",courseRoutes);


const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("connect to db")
    console.log("server is running")
   })
})
