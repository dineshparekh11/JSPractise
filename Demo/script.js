// Accessing elements in the DOM by their IDs
const heading = document.getElementById("myHeading");
const button = document.getElementById("myButton");

// Adding an event listener to the button
button.addEventListener("click", function () {
  // Changing the text color of the heading to red
  heading.style.color = "red";
});

button.addEventListener("click", function () {
  // This code will run when the button is clicked
  alert("Button clicked!");
});

