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


// FORM CLIENT-SIDE DATA ENTRY VALIDATION -----------------------------------
const form = document.getElementById('form')

// VAR'S RELATED TO "PASSWORD LENGTH" ERRORS
const numLenGiven = document.getElementById('num-len-given')
const errorElement1 = document.getElementById('error_msg_1')

// VAR'S RELATED TO "SWITCHES" ERRORS
const allSwitches = document.querySelectorAll('.form-group .form-check-input');
const errorElement2 = document.getElementById('error_msg_2');
let atLeastOneChecked = false;

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // ERROR CHECKS FOR "PASSWORD LENGTH"
  let logError1 = []
  if (numLenGiven.value === '' || numLenGiven.value == null) {
    logError1.push('Please enter a number')

  }
  if (numLenGiven.value >= 1) {
    if (numLenGiven.value < 10 || numLenGiven.value > 64) {
      logError1.push('Please enter a number between 10-64')
    }
}

  if (logError1.length > 0) {
    errorElement1.innerText = logError1.join(', ')
  } else {
    errorElement1.innerText = '';
  }

  // ERROR CHECKS FOR "SWITCHES"
  let logError2 = []

  allSwitches.forEach(input => {
  if (input.checked) {
      atLeastOneChecked = true;
    }
  });

  if (!atLeastOneChecked) {
      logError2.push('Please select at least one option')
  }

  if (logError2.length > 0) {
      errorElement2.innerText = logError2.join(', ');
  } else {
    atLeastOneChecked = false;
    errorElement2.innerText = '';
  }
})
// FORM CLIENT-SIDE DATA ENTRY VALIDATION (end) -----------------------------------


// GET FORM VALUES -----------------------------------
var isCapitalLettersOn = document.getElementById('capital-letters')
var isNumbersOn = document.getElementById('numbers')
var isSpecialCharOn = document.getElementById('special-char')



// GET FORM VALUES (end) -----------------------------------

// CREATE AN ARRAY TO HOLD THE COMPLETED PASSWORD
var passwordBox = []

function addSpecialChar() {
  
  
  for (let i = 0; i < numLenGiven.value; i++) {
    const randomIndex = Math.floor(Math.random() * specialCharacters.length);
    passwordBox.push(randomIndex)
      
    }    
  }






// this eventListener is not needed and is here just to see results from my coding below
form.addEventListener('submit', (e) => {
  console.log(numLenGiven.value);

console.log(isCapitalLettersOn.checked);
console.log(isNumbersOn.checked);
console.log(isSpecialCharOn.checked);

addSpecialChar()

console.log(passwordBox);
})



// TODO:
// [] Get the len value from the forms to manipulate
// [] 

