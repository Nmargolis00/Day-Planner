
// Declare Variables:

let currentHour = dayjs().format('H')
let saveEl = $('.saveBtn');



// Display current Day, Month and Date on Header
let date = dayjs().format('dddd MMMM, M');
$('#currentDay').text(date)


//Save input tasks

function saveInput (){
    
    let task = $(".description").val();

}



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
  
  
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  //Compare the time block against the current time from Day.js(). Then apply the correct class based on the comparison
  
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  //});
  
  
  
  // GIVEN I am using a daily planner to create a schedule
  // WHEN I open the planner
  // THEN the current day is displayed at the top of the calendar
  // Make it look like that other activity. Make sure it looks like Day.JS and that the link exists. Set the right time format
  
  
  
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  //remove the static past, present and future classes. We do not need the hide classes but a similar technique. An if statement that changes the CSS on js
  //NOTE: the time moves on the hours
  
  //Will also need to define standard working hours for your if statement
  //if plannerTime is less than currentTime class = gray,
  //if plannerTime is equal to currentTime class = yellow,
  //if plannerTime is more than currentTime class = green,
  //Easiest to do this on the hour
  
  
  
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // WHEN I click into a timeblock
  
  
  // THEN I can enter text
  // WHEN I click the save button for that timeblock. This is the event
  //
  
  
  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist
  
  //localStorage that shit

  // Event Listeners
  saveEl.on("click", FIGUREOUTTHEFUNCTIONTOPUTHERE)