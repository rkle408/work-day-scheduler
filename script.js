// Confirmed Variables Here:
var currentDayElement = $("#currentDay");
var containerEl = $(".container");
var textareaEl = $("textarea"); // will delete
var saveButtonEl = $(".saveBtn"); // will delete

// Need to use these elements, but they may be moved into functions later!:
var timeBlockEl = $(".time-block");
var pastEl = $(".past");
var presentEl = $(".present"); 
var futureEL = $(".future");


// Need to save plans
// WILL NEED TO REDO NAMES TO MATCH HTML
saveButtonEl.on('click', function(event) {
    event.preventDefault();

    var plans = {textareaEl: textareaEl.value};

    // Need localStorage
    localStorage.setItem("plans", JSON.stringify(plans));
    renderDescription();
});

// need to display saved description and get localStorage
function renderDescription() {
    var plans = textareaEl.value;
    console.log(textareaEl);
    var lastPlans = JSON.parse(localStorage.getItem("plans"));
    if (lastPlans !== null) {
        document.getElementsByClassName("")// THIS WILL NEED NEW NAME WHEN DONE).value += lastPlans.value;
    }
};


// Need loop for every hour?


// Function to display time
function displayTime() {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare function
setInterval(displayTime, 1000);


// Need variables for every hour


// Need to do functions for every hour