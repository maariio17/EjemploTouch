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
    document.getElementById("log").innerHTML = "Touchstart " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }


  function handleCancel(evt) {
    evt.preventDefault();
    log.innerHTML = "touchcancel.";
  }
  function deviceOrientationHandler(evt) {
    evt.preventDefault();
    log.innerHTML = evt.alpha;
  }
