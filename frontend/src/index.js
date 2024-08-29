import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CourseContextProvider } from './context/CourseContext';
import { BrowserRouter,Router, RouterProvider } from 'react-router-dom';
import router from './routes';
import VideoPlayer from './components/video';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
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
root.render(
  <React.StrictMode>
    <CourseContextProvider>
     
    <RouterProvider router={router}/>
    </CourseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
