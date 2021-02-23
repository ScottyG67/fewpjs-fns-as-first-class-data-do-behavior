/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let hour = timeString.split(":")[0]
  let hourInteger = parseInt(hour);
  return hourInteger < 11 ? "Good Morning"
    : hourInteger < 15 ? "Good Afternoon" : "Good Evening";
}

function displayMessage(greetingString){
  let message = document.getElementById('greeting')
  message.innerText = greetingString;
}
/* Write your implementation of displayMessage() */
