// VARIABLES
let dateLocation = $('#currentDay');


// FUNCTIONS

function dateCreate() {
    dateLocation.text(moment().format("MMM Do, YYYY"));
}

dateCreate();


