/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

  function greet (string) {
    let time = parseInt(string)
    if (time < 12) {
      return "Good Morning"
    } else if (time > 17){
      return "Good Evening"
    } else {
      return "Good Afternoon"
    }
  }
/* Write your implementation of displayMessage() */
  function displayMessage(string) {
    let h1 = document.getElementById('greeting')
    h1.innerText = string
  }

