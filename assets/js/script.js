// VARIABLES
let dateLocation = $('#currentDay');

let currentTime = moment().format('HH');

let nineSaveBtn = $('#9am-button');
let tenSaveBtn = $('#10am-button');
let elevenSaveBtn = $('#11am-button');
let twelveSaveBtn = $('#12pm-button');
let oneSaveBtn = $('#1pm-button');
let twoSaveBtn = $('#2pm-button');
let threeSaveBtn = $('#3pm-button');
let fourSaveBtn = $('#4pm-button');
let fiveSaveBtn = $('#5pm-button');


// FUNCTIONS

function dateCreate() {
    dateLocation.text(moment().format("MMM Do, YYYY"));
}

dateCreate();


// conditional statements to apply appropriate text area color depending on time of day

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



// click functions for the save button on each hour

nineSaveBtn.click(function() {
    console.log("hello world");
    let nineTasks = $('#9am-tasks').val();

    localStorage.setItem("nineScheduler", nineTasks);
})

let nineInfo = localStorage.getItem("nineScheduler");
$('#9am-tasks').append(nineInfo);



tenSaveBtn.click(function() {
    console.log("Bob Dobolina");
    let tenTasks = $('#10am-tasks').val();

    localStorage.setItem("tenScheduler", tenTasks);
})

let tenInfo = localStorage.getItem("tenScheduler");
$('#10am-tasks').append(tenInfo);


elevenSaveBtn.click(function() {
    console.log("Nope! Chuck Testa");
    let elevenTasks = $('#11am-tasks').val();

    localStorage.setItem("elevenScheduler", elevenTasks);
})

let elevenInfo = localStorage.getItem("elevenScheduler");
$('#11am-tasks').append(elevenInfo);


twelveSaveBtn.click(function() {
    console.log("All your base are belong to us");
    let twelveTasks = $('#12pm-tasks').val();

    localStorage.setItem("twelveScheduler", twelveTasks);
})

let twelveInfo = localStorage.getItem("twelveScheduler");
$('#12pm-tasks').append(twelveInfo);

oneSaveBtn.click(function() {
    console.log("Numa Numa");
    let oneTasks = $('#1pm-tasks').val();

    localStorage.setItem("oneScheduler", oneTasks);
})

let oneInfo = localStorage.getItem("oneScheduler");
$('#1pm-tasks').append(oneInfo);


twoSaveBtn.click(function() {
    console.log("The whistles go wooooo");
})

threeSaveBtn.click(function() {
    console.log("get pitted, so pitted");
})

fourSaveBtn.click(function() {
    console.log("more dots more dots");
})

fiveSaveBtn.click(function() {
    console.log("Leroy Jenkins");
})


