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
    localStorage.setItem(message, timeSlot);

  })

function showMessage(){

  $('.time-block').each(function(){

    let message = $(this).siblings('.description').val();
    let timeSlot = $(this).parent().attr('id');
    localStorage.getItem(message, timeSlot);
    if(message){
      $('this').siblings('.description').text(value);
    }
  

  })

} 
showMessage();





$('#hour-9 .description').val(localStorage.getItem('#hour-9'))






})

// $(selector).each(function() {
//   var key = $(this).data('key');
//   var value = localStorage.getItem(key);
//   // Do something with the key and value
// });


// $(document).ready(function() {
//   var key = 'exampleKey';
//   var value = localStorage.getItem(key);
//   if (value) {
//     $('#elementId').text(value);
//   }
// });

// Where #elementId is the id of the HTML element you want to update with the data from local storage. The localStorage.getItem(key) method retrieves the value stored in local storage for the given key. The if (value) check makes sure that a value is retrieved before updating the element. The $(document).ready(function()) method ensures that the code is executed after the page has finished loading.

