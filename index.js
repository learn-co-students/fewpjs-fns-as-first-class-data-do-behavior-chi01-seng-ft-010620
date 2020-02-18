/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(s){
  let hour = parseInt(s.split(":")[0])
  if (hour < 12){
    return "Good Morning"
  } else if (hour > 17){
    return "Good Evening"
  } else{
    return "Good Afternoon"
  }
}

function displayMessage(s){
  let el = document.getElementById("greeting");
  el.innerText = s;
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
