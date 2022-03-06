// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ----- NEW CODE IS BELOW THIS LINE -----//
function generatePassword() {
  // Initializing a lowercase Array
  var array_lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Initializing an Uppercase Array
  var array_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  // Initializing a Special Char Array
  var array_special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "`", "~", ""];
  // Initializing a Number Array
  var array_num = ["0","1","2","3","4","5","6","7","8","9"];

  // Initializing an empty array that will accept all characters available to use for the password
  var full_char_array = [];
  // Initializing an empty array to add separate characters for the password
  // Password to be converted into a string at the end
  var password = [];
  var trackstring = "";

  // Asks the user for the length of the desired password, must be at least 8, no more than 128
  var password_length = 0;
  while (password_length < 8 || password_length > 128) {
    password_length = prompt("Please enter the length of your desired password", "Password Length (Between 8 up to 128)");
  }
  alert("You've chosen to randomly generate a password of length: " +password_length);

  // Asks the user to use lower case letters
  // If yes, add a random lower case letter to the password, add all lower case letters to the BIG hat to pull from later
  var bool_lower = false;
  if (confirm("Do you wish to use lower case letters?")) {
    bool_lower = true;
    password.push(array_lower[Math.floor(Math.random() * array_lower.length)]);
    full_char_array = full_char_array.concat(array_lower);
    alert("You've chosen to generate a password that includes lower case letters");
    // trackstring = trackstring + "lower case letters, "; 
  } 
  else {
    alert("NO LOWER CASE LETTERS WILL BE USED IN THE PASSWORD");
  } 

  // Asks the user to use upper case letters
  // If yes, add a random upper case letter to the password, add all upper case letters to the BIG hat to pull from later
  var bool_upper = false;
  if (confirm("Do you wish to use upper case letters?")) {
    bool_upper = true;
    password.push(array_upper[Math.floor(Math.random() * array_upper.length)]);
    full_char_array = full_char_array.concat(array_upper);
    alert("You've chosen to generate a password that includes upper case letters");
    // trackstring = trackstring + "upper case letters, "; 
  } 
  else {
    alert("NO UPPER CASE LETTERS WILL BE USED IN THE PASSWORD");
  } 

  // Asks the user to use special characters
  // If yes, add a random special character to the password, add all special characters to the BIG hat to pull from later
  var bool_special = false;
  if (confirm("Do you wish to use special characters?")) {
    bool_special = true;
    password.push(array_special[Math.floor(Math.random() * array_special.length)]);
    full_char_array = full_char_array.concat(array_special);
    alert("You've chosen to generate a password that includes special characters");
    // trackstring = trackstring + "special characters, "; 
  } 
  else {
    alert("NO SPECIAL CHARACTERS WILL BE USED IN THE PASSWORD");
  } 

  // Asks the user to use numbers
  var bool_num = false;
  // Need to check if all other characters are not going to be used - then numbers are the only available password
  if (bool_lower == false && bool_upper == false && bool_special == false)
  {
    bool_num = true;
    alert("WARNING: NO LOWER CASE, UPPER CASE, OR SPECIAL CHARACTERS. YOU ARE GETTING AN ONLY-NUMBER PASSWORD");
      password.push(array_num[Math.floor(Math.random() * array_num.length)]);
      full_char_array = full_char_array.concat(array_num);
  }
  // Asks the user to use numbers
  // If yes, add a random number to the password add all numbers to the BIG hat to pull from later
  else {
    if (confirm("Do you wish to use numbers?")) {
      bool_num = true;
      password.push(array_num[Math.floor(Math.random() * array_num.length)]);
      full_char_array = full_char_array.concat(array_num);
      alert("You've chosen to generate a password that includes numbers");
      // trackstring = trackstring + "numbers, ";
    } 
    else {
      alert("NO NUMBERS WILL BE USED IN THE PASSWORD");
    } 
  }

  // Randomly assigning additional characters to fill out the remainder of the password_length
  var special_count = password.length;
  // password_length - special_count = difference between intended length of string minus the characters already added as a minimum
  for (let i=0; i<(password_length - special_count); i++)
  {
    password.push(full_char_array[Math.floor(Math.random() * full_char_array.length)]);
  }
  
  // alert("You have chosen to make a password of length: " +password.length+ " with " +trackstring);
  // Converting the array into a string and returning the string
  password_string = password.join("");
  alert("Your password is: " +password_string);

  return password_string;
}