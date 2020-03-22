

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
  return Math.floor(Math.random() * 129) + 8;
  }


function getRandomUpper() {
  return String.fromCharCode(Math.random)
}

function getRandomLower() {
  return String.fromCharCode
}

function getrandomCharacters() {
  return Characters = "!@#$%^&*?=+"
}



console.log(getRandomNum());
console.log(getrandomCharacters());