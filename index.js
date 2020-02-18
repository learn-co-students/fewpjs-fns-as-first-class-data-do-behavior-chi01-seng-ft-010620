/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
   timeString = parseInt(timeString)
  if (timeString < 12) {
    return "Good Morning"
  }
  else if (timeString > 12 && timeString < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
  
}

function displayMessage(stringy) {
    document.getElementById('greeting').innerText = stringy; 
    

}