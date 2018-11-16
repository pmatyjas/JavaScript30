const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const currentDate = new Date();

    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hour = currentDate.getHours();

    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minutesDeg = ((minutes / 60) * 360) + 90;
    const hourDeg = ((hour / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
