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

var isLowercaseOn = true
// GET FORM VALUES (end) -----------------------------------

// CREATE AN ARRAY TO HOLD THE COMPLETED PASSWORD
var passwordBox = []

// VARS THAT WILL BE ALLOCATED a # SPLIT FROM THE # DEFINED IN numLenGiven
var addSpecialCharCut = 0
var addNumericCharactersCut = 0
var addLowerCasedCharactersCut = 0
var addUpperCasedCharactersCut = 0


// FUNC THAT SPLITS UP numLenGiven ACROSS THE SWITCHES TURNED ON -----------------------------------
function setCuts() {
  var count = 0;

  while (count < numLenGiven.value) {

    if (isSpecialCharOn.checked && count != numLenGiven.value) {
      addSpecialCharCut++;
      count++;
    } 
    if (isNumbersOn.checked && count != numLenGiven.value) {
      addNumericCharactersCut++;
      count++;
    }
    if (isLowercaseOn === true && count != numLenGiven.value) {
      addLowerCasedCharactersCut++;
      count++;
    }
    if (isCapitalLettersOn.checked && count != numLenGiven.value) {
      addUpperCasedCharactersCut++;
      count++;
    }
  }
}
// FUNC THAT SPLITS UP numLenGiven ACROSS THE SWITCHES TURNED ON (end) -----------------------------------


// 4 FUNC'S THAT PUSH THE # OF ELEMENTS (FROM ITS SPLIT) TO passwordBox -----------------------------------
function addSpecialChar() {
  for (let i = 0; i < addSpecialCharCut; i++) {
    const randomIndex = Math.floor(Math.random() * specialCharacters.length);
    passwordBox.push(specialCharacters[randomIndex])
  }
}

function addNumericCharacters() {
  for (let i = 0; i < addNumericCharactersCut; i++) {
    const randomIndex = Math.floor(Math.random() * numericCharacters.length);
    passwordBox.push(numericCharacters[randomIndex])
  }
}

function addLowerCasedCharacters() {
  for (let i = 0; i < addLowerCasedCharactersCut; i++) {
    const randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
    passwordBox.push(lowerCasedCharacters[randomIndex])
  }
}

function addUpperCasedCharacters() {
  for (let i = 0; i < addUpperCasedCharactersCut; i++) {
    const randomIndex = Math.floor(Math.random() * upperCasedCharacters.length);
    passwordBox.push(upperCasedCharacters[randomIndex])
  }
}
// 4 FUNC'S THAT PUSH THE # OF ELEMENTS (FROM ITS SPLIT) TO passwordBox (end) -----------------------------------

// VAR THAT CONTAINS THE LAST RESULT ARRAY
var passwordBoxMadeRandom = []


// FUNC THAT MAKES THE LAST RESULT IN passwordBox RANDOM -----------------------------------
function passwordBoxMakeRandom() {
  for (let i = 0; i < passwordBox.length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordBox.length);
    passwordBoxMadeRandom.push(passwordBox[randomIndex])
  }
}
// FUNC THAT MAKES THE LAST RESULT IN passwordBox RANDOM (end) -----------------------------------






// this eventListener is not needed and is here just to see results from my coding below
form.addEventListener('submit', (e) => {
  console.log(numLenGiven.value);

console.log(isCapitalLettersOn.checked);
console.log(isNumbersOn.checked);
console.log(isSpecialCharOn.checked);

setCuts() 

addSpecialChar()
addNumericCharacters()
addLowerCasedCharacters()
addUpperCasedCharacters()

passwordBoxMakeRandom()

console.log("numLenGiven.value " + numLenGiven.value)
console.log("addSpecialCharCut: " + addSpecialCharCut)
console.log("addNumericCharactersCut: " + addNumericCharactersCut)
console.log("addLowerCasedCharactersCut: " + addLowerCasedCharactersCut)
console.log("addUpperCasedCharactersCut: " + addUpperCasedCharactersCut)

console.log(passwordBox);
console.log(passwordBoxMadeRandom);

})
