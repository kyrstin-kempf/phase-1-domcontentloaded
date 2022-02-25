// Your code goes here
console.log(
    "Before DOM Loads");

document.addEventListener("DOMContentLoaded", function() {
    console.log("After DOM Loads");
    console.log(document.querySelector('#text').textContent = "This is really cool!");
  });

// document.addEventListener("DOMContentLoaded", function() {
// document.querySelector('#text').replaceWith("This is really cool!");