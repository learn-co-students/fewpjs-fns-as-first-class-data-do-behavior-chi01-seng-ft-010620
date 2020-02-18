/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeArray = time.split(":");
  let strTime = timeArray.join("")
  strTime = parseInt(strTime, 10);
  console.log(strTime)
  if (strTime < 1200) {
    greeting = "Good Morning";
  } else if (strTime >= 1200 && strTime <= 1700) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting
}

function displayMessage(newMessage) {
  document.getElementById("greeting").innerText = newMessage;
}

/* Write your implementation of displayMessage() */
