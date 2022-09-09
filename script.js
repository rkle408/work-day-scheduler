// Confirmed Variables Here:
var currentDayElement = $("#currentDay");

// Function to display time in jumbotron
function displayTime() {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare function
setInterval(displayTime, 1000);


// Need variables for every hour
var sevenAmText = $('#7amText');
var eightAmText = $('#8amText');
var nineAmText = $('#9amText');
var tenAmText = $('#10amText');
var elevenAmText = $('#11amText');

var twelvePmText = $('#12pmText');
var onePmText = $('#1pmText');
var twoPmText = $('#2pmText');
var threePmText = $('#3pmText');
var fourPmText = $('#4pmText');
var fivePmText = $('#5pmText');

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
    console.log($("#7amText").val());
    localStorage.setItem("sevenAm", $("#7amText").val());
    console.log("saved");
});

let sevenAmStored = localStorage.getItem("sevenAm");
sevenAmText.val(sevenAmStored);

// Need to get past, present, future colors
let now = moment().hour();

if (now > 7) {
    $('#7amText').addClass('past');
} else if (now === 7) {
    $('#7amText').addClass('present');
} else { 
    $('#7amText').addClass('future');
}
