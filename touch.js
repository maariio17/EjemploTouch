function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    //el.addEventListener("click",handleCancel);
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler, false);
      
    }
  }
  
  document.addEventListener("DOMContentLoaded", startup);

  function handleStart(evt) {
    evt.preventDefault();
    log.innerHTML = "touchstart.";
  }

  function handleMove(evt) {
    evt.preventDefault();
    log.innerHTML = "touchmove.";
  }

  function handleEnd(evt) {
    evt.preventDefault();
    log.innerHTML = "touchend";
  }

  function handleCancel(evt) {
    evt.preventDefault();
    log.innerHTML = "touchcancel.";
  }
  function deviceOrientationHandler(evt) {
    evt.preventDefault();
    log.innerHTML = evt.alpha;
  }
