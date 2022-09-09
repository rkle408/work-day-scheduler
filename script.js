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
containerEl.append(saveButtonEl);

// Need to make timeblocks

// Will need a save button event with preventDefault:
saveButtonEl.on('click', function(event) {
    event.preventDefault();
  
    // Need localStorage
    localStorage.setItem("descriptionEl", JSON.stringify(descriptionEl));
    renderDescription(); 
});

// need to display saved description and get localStorage
function renderDescription () {
    var plans = JSON.parse(localStorage.getItem("descriptionEl"));
    if (plans !== null) {
        textareaEl.text(descriptionEl.value);
    }
}

// Need loop for every hour?

// Function to display time
function displayTime () {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare function
setInterval(displayTime, 1000);