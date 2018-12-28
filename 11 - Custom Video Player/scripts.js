const player = document.querySelector('.player');
const viewer = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const playerSliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

function togglePlay () {
    if (viewer.paused) {
        viewer.play();
    } else {
        viewer.pause();
    }
    //  viewer[viewer.paused ? 'play' : 'pause' ]();
}

function changeButton(){
    toggle.textContent = this.paused ? 'P' : 'S';
}

function skip(){
 console.log(this.dataset.skip);
 viewer.currentTime += parseFloat(this.dataset.skip);
 console.log(viewer.currentTime);
 // doesnt work - Chrome
}

function handleSliderUpdate (){
    console.log(this.value);
    console.log(this.name);
    viewer[this.name] = this.value;
}

function handleProgressBar (){
    const percent = (viewer.currentTime / viewer.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scroll (e){
    console.log(e);
    const scrollTime = (e.offsetX / progress.offsetWidth) * viewer.duration;
    viewer.currentTime = scrollTime;
    // doesnt work - Chrome
}

viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', changeButton);
viewer.addEventListener('pause', changeButton);
viewer.addEventListener('timeupdate', handleProgressBar);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
playerSliders.forEach(slider => slider.addEventListener('change', handleSliderUpdate));

let mousedown = false;
progress.addEventListener('click', scroll);
progress.addEventListener('mousemove', (e) => mousedown && scroll(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);