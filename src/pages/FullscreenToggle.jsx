import React, { useState } from 'react';

const FullscreenIcon = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
      <div className="fullscreen" onClick={handleFullscreenToggle}>
        {isFullscreen ? <img className="exitfullscreen" src="./assets/images/exitfullscreen.png" alt="Exit Fullscreen" /> : <img className="enterfullscreen" src="./assets/images/enterfullscreen.png" alt="Enter Fullscreen" />}
      </div>
  );
};

export default FullscreenIcon;
