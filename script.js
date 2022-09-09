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


// Function to display time in jumbotron
function displayTime() {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare function
setInterval(displayTime, 1000);


// Need variables for every hour
var sevenAmText = $('#7amtext');
var eightAmText = $('#8amtext');
var nineAmText = $('#9amtext');
var tenAmText = $('#10amtext');
var elevenAmText = $('#11amtext');

var twelvePmText = $('#12pmtext');
var onePmText = $('#1pmtext');
var twoPmText = $('#2pmtext');
var threePmText = $('#3pmtext');
var fourPmText = $('#4pmtext');
var fivePmText = $('#5pmtext');

// Need variables for every button
var sevenAmBtn = $('.7amsaveBtn');
var eightAmBtn = $('.8amsaveBtn');
var nineAmBtn = $('.9amsaveBtn');
var tenAmBtn = $('.10amsaveBtn');
var elevenAmBtn = $('.11amsaveBtn');

var twelvePmBtn = $('.12pmsaveBtn');
var onePmBtn = $('.1pmsaveBtn');
var twoPmBtn = $('.2pmsaveBtn');
var threePmBtn = $('.3pmsaveBtn');
var fourPmBtn = $('.4pmsaveBtn');
var fivePmBtn = $('.5pmsaveBtn');

// Need to do functions for every hour