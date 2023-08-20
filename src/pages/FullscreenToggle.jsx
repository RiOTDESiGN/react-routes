import React, { useState } from 'react';

import exitfullscreen from '../assets/images/exitfullscreen.png';
import enterfullscreen from '../assets/images/enterfullscreen.png';

const FullscreenIcon = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    const pageContent = document.querySelector(".pageContent")
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
        pageContent.classList.add('pageContentGrow');
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
        pageContent.classList.remove('pageContentGrow');
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
        {isFullscreen ?
        <img className="exitfullscreen" src={exitfullscreen} />
          :
        <img className="enterfullscreen" src={enterfullscreen} />
        }
      </div>
  );
};

export default FullscreenIcon;
