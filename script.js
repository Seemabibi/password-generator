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
  if (isNaN(length)) {
    window.alert(
      "You must enter a valid number");
    return;
  } else if (length < 8 || length > 128) {
    window.alert(
      "You must enter a password between 8 to 128 characters"
    ); return;
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

  const Charlower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const charUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  const charSpec = ["€", "#", "¢", "∞", "§", "¶", "•", "?"];
  const charList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var mainlist = [];

  if (options.hasLowerchars) {
    mainlist = mainlist.concat(Charlower);
  }

  if (options.hasNumberChars) {
    mainlist = mainlist.concat(Charlower);
  }

  var password = ""
  for (var i = 0; i < options.hasNumberChars; i++) {
    password += mainlist[Math.floor(Math.random() * mainlist.length)];
  }

  return (password)
}
generateBtn.addEventListener("click", writePassword);


