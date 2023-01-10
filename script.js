// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordParams = {};

// Function to prompt user for password options

function getPasswordOptions() {

let passLengthStr = prompt(`Length of password: min 10 and max 64)`);
let passLength = Number(passLengthStr);

while(!(passLength >= 10 && passLength <= 64)) {
  alert('Must be between 10 and 64 characters')
   passLength = Number(prompt(`Ask again, Length of password: min 10 and max 64)`))
}
passwordParams.passwordLength = passLength;

function confirmationBoxes() {
  confirm(`Do you want to include lowercase characters?`)?
  passwordParams.lowerCase = true:
  passwordParams.lowerCase = false;
  confirm(`Do you want to include uppercase characters?`)?
  passwordParams.upperCase = true:
  passwordParams.upperCase = false;
  confirm(`Do you want to include numeric characters?`)?
  passwordParams.numeric = true:
  passwordParams.numeric = false;
  confirm(`Do you want to include special characters (!"£%$, etc)?`)?
  passwordParams.special = true:
  passwordParams.special = false;
}
confirmationBoxes();

while (passwordParams.lowerCase === false && passwordParams.upperCase === false && passwordParams.numeric === false && passwordParams.special === false) {
  alert(`You must choose at least one character type`);
confirmationBoxes();
  } 
}




// Function for getting a random element from an array
function getRandom(arr) {
  // generates a random number the length of the input array so will return random index
  return Math.floor(Math.random() * arr.length);
  
}

// Function to generate password with user input
function generatePassword() {
  let passwordArray = [];
  let passString = '';
  let randomCharacter = '';
  let randomTrue = '';
  // filter passwordParams by true

  

// so now we have the true keys in an array called trueArray


for (let i = 0; i < passwordParams.passwordLength; i++) {
  

// link the truth of each key to the relevant character array
// randomise which of those arrays to draw from
  randomTrue = trueKeyArray[getRandom(trueKeyArray)];
  console.log(randomTrue);
  // random true key value stored
  // now we want to link the keys
  if (randomTrue === "lowerCase") {randomCharacter = lowerCasedCharacters[getRandom(lowerCasedCharacters)]};
  if (randomTrue === "upperCase") {randomCharacter = upperCasedCharacters[getRandom(upperCasedCharacters)]};
  if (randomTrue === "numeric")  {randomCharacter = numericCharacters[getRandom(numericCharacters)]};
  if (randomTrue === "special") {randomCharacter = specialCharacters[getRandom(specialCharacters)]};
  passwordArray.push(randomCharacter);
 
} //passString += passwordArray[i];
return passwordArray.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// CODE RUNNING

if (!document.hidden){
getPasswordOptions();
let trueKeyArray = [];

for (let key in passwordParams) {
  if (passwordParams[key] == true){
  trueKeyArray.push(key);
  }
} 
}



// console.log(passwordParams);
// console.log()