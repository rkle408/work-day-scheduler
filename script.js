// Confirmed Variables Here:
var currentDayElement = $("#currentDay");
var containerEl = $(".container");
var textareaEl = $("textarea");
var saveButtonEl = $(".saveBtn");

// Need to use these elements, but they may be moved into functions later!:
var timeBlockEl = $(".time-block");
var rowEl = $(".row");
var hourEl = $(".hour");
var pastEl = $(".past");
var presentEl = $(".present"); 
var futureEL = $(".future");


// TO DO:
// Append things to containerEl????

textareaEl.addClass('.description');

// Need to save plans
function savePlans() {
    var plans = {textareaEl: textareaEl.value};
    // Need localStorage
    localStorage.setItem("plans", JSON.stringify(plans));
};

// need to display saved description and get localStorage
function renderDescription() {
    var lastPlans = JSON.parse(localStorage.getItem("plans"));
    if (lastPlans !== null) {
        document.getElementsByClassName("description").value += lastPlans.value;
    } else {
    return;
    }
};

// Need a save button event with preventDefault:
saveButtonEl.on('click', function(event) {
    event.preventDefault();
    savePlans();
});

// Need loop for every hour?


// Function to display time
function displayTime() {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare function
setInterval(displayTime, 1000);