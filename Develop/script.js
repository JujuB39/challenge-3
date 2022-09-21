
var generateBtn = document.querySelector("#generate");
var choices = ["Y", "N"];
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

  }

 

  

//input validated and at least 1 character type selected after each prompt

//after all inputs in password is generated

//password is either displayed in text or in an alert

  return length;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page