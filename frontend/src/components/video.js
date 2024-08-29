import React from "react";
import videojs from "video.js";
require('videojs-resume-playback')
import 'video.js/dist/video-js.css';

 class VideoPlayer extends React.Component {
  componentDidMount() {
   
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    var myPlayer = videojs("vid");
    
    
    var currentTime = 0;
    videojs("vid").ready(function () {
      var myPlayer = this;
   
    myPlayer.on("seeking", function (event) {
      if (currentTime < myPlayer.currentTime()) {
        myPlayer.currentTime(currentTime);
      }
    });

    myPlayer.on("seeked", function (event) {
      if (currentTime < myPlayer.currentTime()) {
        myPlayer.currentTime(currentTime);
      }
    });
    myPlayer.setInterval(function () {
      if (!myPlayer.paused()) {
        currentTime = myPlayer.currentTime();
      }
    }, 1000);
    });
    myPlayer.on("resume",function(event){
     myPlayer.resumePlayback();
      
      
    });
    
    if (this.videoNode) {
      this.videoNode.setAttribute("webkit-playsinline", true);
      this.videoNode.setAttribute("playsinline", true);
    }
  }
  

  
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video ref={(node) => (this.videoNode = node)} class="video-js"/>
      </div>
    );
  }
}
export default VideoPlayer;

