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

   options.numberOfChars = length;

   options.hasLowerchars = confirm("would you like lower case characters");
   
   var chars = [];

   if (options.hasLowerchars) {

   }

   if (options.hasNumberChars){

   }

   var password = ""
   for (var i = 0; i < options.hasNumberChars; options.hasNumberChars++) {
    password +=
   }

  return (password)
}
generateBtn.addEventListener("click", writePassword);