// VARIABLES
let dateLocation = $('#currentDay');

let currentTime = $('#running-clock');

let twentyFourClock = setInterval(runningClock, 1000);


// FUNCTIONS

function dateCreate() {
    dateLocation.text(moment().format("MMM Do, YYYY"));
}

dateCreate();

function runningClock() {
    currentTime.text(moment().format('HH:mm:ss'));
}

