
var generateBtn = document.querySelector("#generate");
var choices = ["Y", "N"];
var specialCh = [" ", "!", "\"", "#", "$","%","&","'",")","(","*","+",",","-",".","/",":",";","<",">","=","?","@","[","\\","]","^","_","`","{","|","}","~"];
var lowercaseCh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numsCh = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allCh = [];


// Write to generate password
function generatePassword() {
  // Prompt character length
  var lengthAsString = prompt("Choose a password length between 8 and 128 characters");
  // Convert characters to numbers
  var length = parseInt(lengthAsString);
  //While loop to ensure proper length
  while (!length || (length < 8 || length > 128)) {
    lengthAsString = prompt("Criteria not met please choose a character length between 8 and 128 characters");
    length = parseInt(lengthAsString);
  }
  // Prompt if you want lowercase 
  var lowercase = prompt("Do you want your password to include lowercases? Y or N?").toUpperCase();
  while (!(lowercase === choices[0] || lowercase === choices[1])) {
    lowercase = prompt("Criteria not met! Do you want your password to include lowercases? Y or N?").toUpperCase();
  }
  //prompt if you want uppercase
  var uppercase = prompt("Do you want your password to include uppercases? Y or N?").toUpperCase()
  while (!(uppercase === choices[0] || uppercase === choices[1])) {
    uppercase = prompt("Criteria not met! Do you want your password to include uppercases? Y or N?").toUpperCase();
  }
  // prompt if you want to include numbers 
  var numbers = prompt("Do you want your password to include numbers? Y or N?").toUpperCase()
  while (!(numbers === choices[0] || numbers === choices[1])) {
    numbers = prompt("Criteria not met! Do you want your password to include numbers? Y or N?").toUpperCase();
  }
  // prompt if you want to include special characters
  var specialChars = prompt("Do you want your password to include special characters? Y or N?").toUpperCase();
  while (!(specialChars === choices[0] || specialChars === choices[1])) {
    specialChars = prompt("Criteria not met! Do you want your password to include special characters? Y or N?").toUpperCase();
  }

  //input validated and at least 1 character type selected after each prompt
  if (lowercase === choices [1] && uppercase === choices [1] && 
  numbers === choices [1] && specialChars === choices [1]) {
    alert("Please try again at least 1 character type must be selected!");
    return generatePassword(); 
  }

  if (lowercase === choices[0]) {
    allCh += lowercaseCh;
  }

  if (uppercase === choices[0]) {
    allCh += uppercaseCh;
  }

  if (numbers === choices [0]) {
    allCh += numsCh;
  }

  if (specialChars === choices [0]) {
    allCh +=specialCh;
  }
 

  var password = "";

  for (let i = 0; i < length; i++) {
   password += getPasswordCharacter();
 
  }
  return password;
 
}

//Get Password characters
function getPasswordCharacter() {
  return allCh[Math.floor(Math.random() * allCh.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
