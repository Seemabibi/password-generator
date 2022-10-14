var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
   var options = {
   numberOfChars: 0,
   hasSpecialChars: false,
   hasLowerchars: false,
   hasUpperChars: false,
   hasNumberChars: false,
   }

   var length = window.prompt("how long would you like your password to be?");

   if (isNaN (length)) {
   window.alert ("You must enter a valid number")
   }









}
generateBtn.addEventListener("click", writePassword);