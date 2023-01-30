$(document).ready(function(){


// Declare Variables:

let currentHour = dayjs().hour();
//console.log(currentHour)
let saveEl = $('.saveBtn');



// Display current Day, Month and Date on Header
let date = dayjs().format('dddd MMMM, M');
$('#currentDay').text(date)


//Function to Change Color based on the hour of the day

function changeColor(){

 $('.time-block').each(function(){
  let hourBlock = parseInt($(this).attr('id').split('-')[1])
  //$this means to grab everything inside of the timeblock. It is grabbing everything that the class affects
  if(hourBlock < currentHour){
    $(this).addClass('past');
  }
  if(hourBlock === currentHour){
    $(this).addClass('present');
  }
  if(hourBlock > currentHour){
    $(this).addClass('future');
  }

 })


}
  changeColor();



  saveEl.on("click", function(){

    let message = $(this).siblings('.description').val();
    let timeSlot = $(this).parent().attr('id');
    localStorage.setItem(timeSlot, message);

  });




//Show input value

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));



});



