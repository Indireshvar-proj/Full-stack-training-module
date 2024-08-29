import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import Signup from '../pages/Signup'
import Courses from '../pages/Courses'
import Coursesfile from '../pages/Coursefile'
import CourseStudy from '../pages/CourseStudy'
import Lecture from '../pages/Lecture'
import Admin from "../pages/admin"
import AdminPage from "../pages/adminpage"
import Dashboard from '../pages/admindashboard'
import demo from '../pages/demo'

const router = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      children : [
        {
             path : "demo",
             element: <demo/>
        },
        {
          path : "",
          element :<Login/>
        },
        {
          path:"admindashboard",
          element :  <Dashboard/>
        },
        {
          path:"adminpage",
          element: <AdminPage/>
        },
        {
          path : "admin/:id",
          element :<Admin/>
        },
        {
          path : "lectures/:id",
          element : <Lecture/>
        },
        {
          path : "course/study/:id",
          element: <CourseStudy/>
        },
        {
          path : "coursefile",
          element : <Coursesfile/>
        },
        {
          path :"Courses",
          element :<Courses/>
        },
        {
          path :"home",
          element :<Home/>
        },
        {
          path :"forgot-password",
          element :<ForgotPassword/>
        },
        {
          path :"sign-up",
          element :<Signup/>
        }
      ]

    } 
])

export default router
