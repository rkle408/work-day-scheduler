// Confirmed Variables Here:
var currentDayElement = $("#currentDay");
var containerEl = $(".container");
var textareaEl = $("textarea");

// Need to use these elements, but they may be moved into functions later!:
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block");
var rowEl = $(".row");
var hourEl = $(".hour");
var pastEl = $(".past");
var presentEl = $(".present"); 
var futureEL = $(".future");
var saveButtonEl = $(".saveBtn");

// TO DO:
// Append things to containerEl
containerEl.append(descriptionEl);

// Will need a save button event with preventDefault:
// saveButtonEl.on('click', function(event) {
//  event.preventDefault();
//  
// 
//  // Need localStorage
// localStorage.setItem("descriptionEl", JSON.stringify(descriptionEl));
// });

// Function to display time
function displayTime () {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}



// Declare function
setInterval(displayTime, 1000);