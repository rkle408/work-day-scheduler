// Confirmed Variables Here:
var currentDayElement = $("#currentDay");

// Need to use these elements, but they may be moved into functions later!:
var timeBlockEl = $(".time-block");
var pastEl = $(".past");
var presentEl = $(".present"); 
var futureEL = $(".future");

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

// Need to save plans
// WILL NEED TO REDO NAMES TO MATCH HTML
sevenAmBtn.on('click', function(event) {
    event.preventDefault();

    // Need localStorage
    console.log($("#7amtext").val());
    localStorage.setItem("sevenAm", $("#7amtext").val());
    console.log("saved");
});

let sevenAmStored = localStorage.getItem("sevenAm");
sevenAmText.val(sevenAmStored);

// Need to get past, present, future colors