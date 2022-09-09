// Confirmed Variables Here:
var currentDayElement = $("#currentDay");

// Function to display time in jumbotron (only requires date, but more convenient to have the time as well!)
function displayTime() {
    var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayElement.text(timeNow);
}

// Declare time function
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

// Need to save plans once button is clicked
sevenAmBtn.on('click', function(event) {
    // To prevent data loss when button is clicked
    event.preventDefault(); 

    // Need to store data in localStorage
    console.log($("#7amText").val());
    localStorage.setItem("sevenAm", $("#7amText").val());
    // console.log("saved"); this was just a test
});

// This will allow the data to be displayed even if the page is refreshed!
var sevenAmStored = localStorage.getItem("sevenAm");
sevenAmText.val(sevenAmStored);

// Need to get past, present, future colors already stored in CSS! (The CSS white font is difficult to read though...)
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

// Military time

onePmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#1pmText").val());
    localStorage.setItem("onePm", $("#1pmText").val());
});

var onePmStored = localStorage.getItem("onePm");
onePmText.val(onePmStored);

if (now > 13) {
    $('#1pmText').addClass('past');
} else if (now === 13) {
    $('#1pmText').addClass('present');
} else { 
    $('#1pmText').addClass('future');
}

//

twoPmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#2pmText").val());
    localStorage.setItem("twoPm", $("#2pmText").val());
});

var twoPmStored = localStorage.getItem("twoPm");
twoPmText.val(twoPmStored);

if (now > 14) {
    $('#2pmText').addClass('past');
} else if (now === 14) {
    $('#2pmText').addClass('present');
} else { 
    $('#2pmText').addClass('future');
}

//

threePmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#3pmText").val());
    localStorage.setItem("threePm", $("#3pmText").val());
});

var threePmStored = localStorage.getItem("threePm");
threePmText.val(threePmStored);

if (now > 15) {
    $('#3pmText').addClass('past');
} else if (now === 15) {
    $('#3pmText').addClass('present');
} else { 
    $('#3pmText').addClass('future');
}

//

fourPmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#4pmText").val());
    localStorage.setItem("fourPm", $("#4pmText").val());
});

var fourPmStored = localStorage.getItem("fourPm");
fourPmText.val(fourPmStored);

if (now > 16) {
    $('#4pmText').addClass('past');
} else if (now === 16) {
    $('#4pmText').addClass('present');
} else { 
    $('#4pmText').addClass('future');
}

//

fivePmBtn.on('click', function(event) {
    event.preventDefault();

    console.log($("#5pmText").val());
    localStorage.setItem("fivePm", $("#5pmText").val());
});

var fivePmStored = localStorage.getItem("fivePm");
fivePmText.val(fivePmStored);

if (now > 17) {
    $('#5pmText').addClass('past');
} else if (now === 17) {
    $('#5pmText').addClass('present');
} else { 
    $('#5pmText').addClass('future');
}