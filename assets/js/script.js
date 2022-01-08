// VARIABLES
let dateLocation = $('#currentDay');

let currentTime = moment().format('HH');


// FUNCTIONS

function dateCreate() {
    dateLocation.text(moment().format("MMM Do, YYYY"));
}

dateCreate();

if (currentTime == 9) {
    $('#9am-tasks').addClass("present");
} else if (currentTime > 9) {
    $('#9am-tasks').addClass("past");
} else {
    $('#9am-tasks').addClass("future");
}

if (currentTime == 10) {
    $('#10am-tasks').addClass("present");
} else if (currentTime > 10) {
    $('#10am-tasks').addClass("past");
} else {
    $('#10am-tasks').addClass("future");
}

if (currentTime == 11) {
    $('#11am-tasks').addClass("present");
} else if (currentTime > 11) {
    $('#11am-tasks').addClass("past");
} else {
    $('#11am-tasks').addClass("future");
}

if (currentTime == 12) {
    $('#12pm-tasks').addClass("present");
} else if (currentTime > 12) {
    $('#12pm-tasks').addClass("past");
} else {
    $('#12pm-tasks').addClass("future");
}

if (currentTime == 13) {
    $('#1pm-tasks').addClass("present");
} else if (currentTime > 13) {
    $('#1pm-tasks').addClass("past");
} else {
    $('#1pm-tasks').addClass("future");
}

if (currentTime == 14) {
    $('#2pm-tasks').addClass("present");
} else if (currentTime > 14) {
    $('#2pm-tasks').addClass("past");
} else {
    $('#2pm-tasks').addClass("future");
}

if (currentTime == 15) {
    $('#3pm-tasks').addClass("present");
} else if (currentTime > 15) {
    $('#3pm-tasks').addClass("past");
} else {
    $('#3pm-tasks').addClass("future");
}

if (currentTime == 16) {
    $('#4pm-tasks').addClass("present");
} else if (currentTime > 16) {
    $('#4pm-tasks').addClass("past");
} else {
    $('#4pm-tasks').addClass("future");
}

if (currentTime == 17) {
    $('#5pm-tasks').addClass("present");
} else if (currentTime > 17) {
    $('#5pm-tasks').addClass("past");
} else {
    $('#5pm-tasks').addClass("future");
}