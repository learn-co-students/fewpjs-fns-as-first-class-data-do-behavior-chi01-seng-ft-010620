/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  
  const splitTime = timeString.split(':');

  const parsed = parseInt(splitTime[0]);

  if (parsed < 12){
    return "Good Morning"
  }
  
  else if (parsed >= 12 && parsed <= 16){
    return "Good Afternoon"
  }

  else{
    return "Good Evening"
  }
}

function displayMessage(string){
  let element = document.getElementById('greeting');

  element.innerText = string;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
