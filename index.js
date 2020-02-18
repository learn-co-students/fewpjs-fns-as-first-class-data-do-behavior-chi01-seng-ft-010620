/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  let time = timeString.split(':');
  let hour = parseInt(time[0], 10)
  if(hour < 12) {
    greeting = "Good Morning";
  }
  else if(hour > 17){
    greeting = "Good Evening";
  }
  else {
    greeting = "Good Afternoon";
  }
  return greeting
}



function displayMessage(string){
  document.getElementById('greeting').innerText = string;
}
