const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');

const colorAlert = () => {
    alert('Red');
}
const placeAlert = () => {
    alert('Daytona Beach');
}
const ritualAlert = () => {
    alert('Going to Arizona');
}

color.addEventListener('click', colorAlert);
place.addEventListener('click', placeAlert);
ritual.addEventListener('click', ritualAlert);