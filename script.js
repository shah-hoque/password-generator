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

// VAR'S RELATED TO "PASSWORD LENGTH"
const numLenGiven = document.getElementById('num-len-given')
const errorElement1 = document.getElementById('error_msg_1')

// VAR'S RELATED TO "SWITCHES"
const allSwitches = document.querySelectorAll('.form-group .form-check-input');
const errorElement2 = document.getElementById('error_msg_2');
let atLeastOneChecked = false;


form.addEventListener('submit', (e) => {
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
    e.preventDefault()
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
      e.preventDefault();
      errorElement2.innerText = logError2.join(', ');
  } else {
    atLeastOneChecked = false;
    errorElement2.innerText = '';
  }

})
// FORM CLIENT-SIDE DATA ENTRY VALIDATION (end) -----------------------------------
