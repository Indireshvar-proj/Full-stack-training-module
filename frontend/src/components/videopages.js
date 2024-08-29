import React from 'react';
import videojs from 'react-video-js-player';
import 'video.js/dist/video-js.css';
export const VideoJS = (props) => {
   const videoReference = React.useRef(null);
   const playerReference = React.useRef(null);
   const {options, onReady} = props;
   
   React.useEffect(() => {
      // Initializing video.js player
      if (!playerReference.current) {
         const videoElement = videoReference.current;
         if (!videoElement) return;
        
         const player = playerReference.current =
         videojs(videoElement, options, () => {
            videojs.log('Video player is ready');
            onReady && onReady(player);
            const myPlayer = videojs("vid")
            if (document.getElementById("vid")) {
                videojs("vid").ready(function() {
                  
                  var myPlayer = this;
              
                  //Set initial time to 0
                  var currentTime = 0;
                  
                  //This example allows users to seek backwards but not forwards.
                  //To disable all seeking replace the if statements from the next
                  //two functions with myPlayer.currentTime(currentTime);
              
                  myPlayer.on("seeking", function(event) {
                    if (currentTime < myPlayer.currentTime()) {
                      myPlayer.currentTime(currentTime);
                    }
                  });
              
                  myPlayer.on("seeked", function(event) {
                    if (currentTime < myPlayer.currentTime()) {
                      myPlayer.currentTime(currentTime);
                    }
                  });
              
                  setInterval(function() {
                    if (!myPlayer.paused()) {
                      currentTime = myPlayer.currentTime();
                    }
                  }, 1000);
              
                });
              }
         });
      }
   }, [options, videoReference]);

   // Destroy video.js player on component unmount
   React.useEffect(() => {
      const player = playerReference.current;
      return () => {
         if (player) {
            player.dispose();
            playerReference.current = null;
         }
      };
   }, [playerReference]);
   // wrap player with data-vjs-player` attribute
   // so no additional wrapper are created in the DOM
   return (
      <div data-vjs-player>
         <video ref={videoReference} className='video-js vjs-big-playcentered'/>
      </div>
   );
}
export default VideoJS;