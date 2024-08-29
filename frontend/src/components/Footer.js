import React from 'react'
import VideoPlayer from './video'
const Footer = () => {
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
  return (
    <footer className="bg-slate-200">
      <div className='ml-60 container mx-auto p-4'>
          <p className='text-center font-bold'>The Videojs Player is initialized with reactjs below under conditions like : no fastforwarding,and can seek backwards.Also resume playback functionality added</p>
         
      </div>
    </footer>
  )
}

export default Footer