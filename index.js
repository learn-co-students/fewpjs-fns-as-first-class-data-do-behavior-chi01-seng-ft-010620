/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeSplit = timeString.split(":")
  let timeHourString = timeSplit[0]
  let timeHour = parseInt(timeHourString)

  if (timeHour < 12){
    return "Good morning"
  }
  else if (timeHour > 12 && timeHour < 5) {
  return "Good Afternoon"}

  else 
  { return "Good Evening"}
}
/* Write your implementation of displayMessage() */
