import React from 'react';

function BackgroundVideo() {
  return (
    <div>
      <video autoPlay muted loop id="video-background">
        <source src="./videos/backgroundvideo.mp4" type="video/mp4" />
      </video>
      
    </div>
  );
}

export default BackgroundVideo;
