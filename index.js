/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(clock) {
  let clockSplit = clock.split(':')
  let num = parseInt(clockSplit[0]);
  if (num < 12) {
    return "Good Morning";
  }
  if (num >= 12 && num < 17) {
    return "Good Afternoon";
  }
  if (num >= 17) {
    return "Good Evening"
  }
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg
}