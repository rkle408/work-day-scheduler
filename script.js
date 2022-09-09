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

// Need to save plans
// WILL NEED TO REDO NAMES TO MATCH HTML
sevenAmBtn.on('click', function(event) {
    event.preventDefault();

    // Need localStorage
    console.log($("#7amText").val());
    localStorage.setItem("sevenAm", $("#7amText").val());
    // console.log("saved");
});

var sevenAmStored = localStorage.getItem("sevenAm");
sevenAmText.val(sevenAmStored);

// Need to get past, present, future colors
var now = moment().hour();

if (now > 7) {
    $('#7amText').addClass('past');
} else if (now === 7) {
    $('#7amText').addClass('present');
} else { 
    $('#7amText').addClass('future');
}

// Need to do for every hour...

eightAmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#8amText").val());
    localStorage.setItem("eightAm", $("#8amText").val());
    // console.log("saved");
});

var eightAmStored = localStorage.getItem("eightAm");
eightAmText.val(eightAmStored);

if (now > 8) {
    $('#8amText').addClass('past');
} else if (now === 8) {
    $('#8amText').addClass('present');
} else { 
    $('#8amText').addClass('future');
}

// 

nineAmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#9amText").val());
    localStorage.setItem("nineAm", $("#9amText").val());
    // console.log("saved");
});

var nineAmStored = localStorage.getItem("nineAm");
nineAmText.val(nineAmStored);

if (now > 9) {
    $('#9amText').addClass('past');
} else if (now === 9) {
    $('#9amText').addClass('present');
} else { 
    $('#9amText').addClass('future');
}

//

tenAmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#10amText").val());
    localStorage.setItem("tenAm", $("#10amText").val());
    //console.log("saved");
});

var tenAmStored = localStorage.getItem("tenAm");
tenAmText.val(tenAmStored);

if (now > 10) {
    $('#10amText').addClass('past');
} else if (now === 10) {
    $('#10amText').addClass('present');
} else { 
    $('#10amText').addClass('future');
}

//

elevenAmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#11amText").val());
    localStorage.setItem("elevenAm", $("#11amText").val());
    // console.log("saved");
});

var elevenAmStored = localStorage.getItem("elevenAm");
elevenAmText.val(elevenAmStored);

if (now > 11) {
    $('#11amText').addClass('past');
} else if (now === 11) {
    $('#11amText').addClass('present');
} else { 
    $('#11amText').addClass('future');
}

//

twelvePmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#12pmText").val());
    localStorage.setItem("twelvePm", $("#12pmText").val());
    // console.log("saved");
});

var twelvePmStored = localStorage.getItem("twelvePm");
twelvePmText.val(twelvePmStored);

if (now > 12) {
    $('#12pmText').addClass('past');
} else if (now === 12) {
    $('#12pmText').addClass('present');
} else { 
    $('#12pmText').addClass('future');
}