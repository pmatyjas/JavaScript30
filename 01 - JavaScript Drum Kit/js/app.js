function drum (event){
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing");
}

const allKeys = document.querySelectorAll('.key');

function removePlaying (){
    this.classList.remove("playing")
}
allKeys.forEach(k => k.addEventListener('transitionend', removePlaying ));
window.addEventListener("keydown", drum );