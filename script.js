// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "="];

var confirmUpperChar;
var confirmLowerChar;
var confirmNumber;
var confirmSpecialChar;
var passLength;
var a;
var b;
var c;

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

function generatePassword() {
  var passChar = [];
  var tempPass = [];
  var lastPass = "";

// Write password prompts when values are entered 
  passLength = parseInt(prompt("Please state the desired length for your password between 8 and 128 characters"));
  while ((!(passLength >= 8)) || (!(passLength <= 128))){
    passLength = parseInt(prompt("Invalid value, please enter a number between 8 and 128"));
  }

  do {
    // Confirmation of uppercase characters
    confirmUpperChar = confirm("Do you want your password to contain uppercase characters?");
    if (confirmUpperChar){
      for (var i = 0; i < upperChar.length; i++ ){
        passChar.push(upperChar[i]);
      }
      tempPass.push(upperChar[Math.floor(Math.random()*upperChar.length)]);
    }
    // Confirmation of lowercase characters
    confirmLowerChar = confirm("Do you want your password to contain lowercase characters?");
    if (confirmLowerChar){
      for (var j = 0; j < lowerChar.length; j++ ){
        passChar.push(lowerChar[j]);
      }
      tempPass.push(lowerChar[Math.floor(Math.random()*lowerChar.length)]);
    }
    // Confirmation of number characters
    confirmNumber = confirm("Do you want your password to contain numbers?");
    if (confirmNumber){
      for (var k = 0; k < number.length; k++ ){
        passChar.push(number[k]);
      }
      tempPass.push(number[Math.floor(Math.random()*number.length)]);
    }
    // Confirmation of special characters
    confirmSpecialChar = confirm("Do you want your password to contain any special characters?");
    if (confirmSpecialChar){
      for (var l = 0; l < specialChar.length; l++ ){
        passChar.push(specialChar[l]);
      }
      tempPass.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
    }
    // If confirmation prompts are invalid
    if (confirmUpperChar !=true && confirmLowerChar !=true && confirmNumber !=true && confirmSpecialChar !=true){
      alert("Please choose at least one of the proper values for your password criteria");
    }
  }
    // When criteria are met generate password
  while (!confirmUpperChar && !confirmLowerChar && !confirmNumber && !confirmSpecialChar);
    for (var m=tempPass.length; m<passLength; m++){
      tempPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
    }
    for (a = tempPass.length -1; a > 0; a--){
      b = Math.floor(Math.random()*a)
      c = tempPass[a]
      tempPass[a] = tempPass[b]
      tempPass[b] = c
    }
    for (var n=0; n<tempPass.length; n++){
      lastPass=lastPass+tempPass[n];
    }
    return lastPass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
