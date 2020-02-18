/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let userTime = time.split(':');

  let parsedTime = parseInt(userTime[0]);

  if (parsedTime < 12){
    return "Good Morning"
  } else if (parsedTime >= 12 && parsedTime < 16){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};

  
/* Write your implementation of displayMessage() */


function displayMessage(greet) {
  let element = document.getElementById('greeting');

  element.innerText = greet;
}
