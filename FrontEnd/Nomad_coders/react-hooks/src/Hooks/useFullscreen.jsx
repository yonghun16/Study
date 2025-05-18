import { useRef } from "react";

function useFullscreen(callback) {
  const element = useRef();

  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

// Fullscreen
  const triggerFull = () => {
    const el = element.current;
    if (el) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {          // Firefox
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {       // Safari / older Chrome
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {           // IE/Edge
        el.msRequestFullscreen();
      } else {
        console.warn("Fullscreen API is not supported.");
        return;
      }
      runCallback(true);
    }
  };

  // Exit Fullscreen
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {
      console.warn("Exit fullscreen API is not supported.");
      return;
    }
    runCallback(false);
  };

  return { element, triggerFull, exitFull };
}

export default useFullscreen
