

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

document.getElementById("#password");
document.addEventListener("click", function() {
  prompt("How many characters would you like your password to be?")
});

function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() < 8) > 129);

}
console.log(getRandomNum());