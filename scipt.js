// Asignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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
  
   // Validate the length that the user has entered 
   var length = window.prompt(
    "How many characters would you like your password to contain?"
    );

    // If the answer is not a number the following alert will appear 
   if (isNaN (length)) {
   window.alert (
    "You must enter a valid number");
    return;
   } else if (length <8 || length > 128)
   window.alert(
    "You must enter a password between 8 to 128 characters"
   );
   return;
  }
   options.numberOfChars = length;
   // Set questions for the user to specify these password choices
   options.hasLowerchars = confirm(
    "Click OK to confirm including lowercase characters"
   );
   options.hasUpperChars = window.confirm(
    "Click OK to confirm including uppercase characters"
   );
   options.hasSpecialChars = window.confirm(
    "Click OK to confirm including special characters"
   );
   options.numberOfChars = window.confirm(
    "Click OK to confirm including numeric characters"
   );

   Const Charlower = [];




   
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