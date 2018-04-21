function playSound(e){
  if(e.keyCode == null){
    return;
  }
  else{
    const elem = document.querySelector(`.keyBtn[data-key = "${e.keyCode}"]`);
    elem.classList.add('playing');
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
  }
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".keyBtn");
function removeTransition(e){
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
