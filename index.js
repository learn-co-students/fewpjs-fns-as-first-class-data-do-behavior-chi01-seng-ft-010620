/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
// split and parseInt
function greet(timeString = "09:30") {
  let splitString = timeString.split(":");
  let hour = parseInt(splitString[0]);
  let minute = parseInt(splitString[1]);

  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17) {
    return "Good Evening";
  }
};

function displayMessage(string) {
  document.querySelector('h1').innerText = string;
};
