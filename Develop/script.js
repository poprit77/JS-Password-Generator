// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// listens for click and runs function to grab length and values of check boxes
//+ sign turns length into number
//passes to generate password function
generateBtn.addEventListener("click", () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numberEL.checked;
  const hassymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(hasLower, hasNumber, hasUpper, hassymbol.length);
});

//Creates resultsfor HTMl to grab
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercasetEL = document.getElementById('lowercaset');
const symbolstEL = document.getElementById('symbolst');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

//Psssword generator function
const randomFunc = {
  lower: getRandomlower,
  upper: getRandomnumber,
  number: getRandomnumber,
  symbol: getRandomsymbol,
}

//generates a random number between 0 and 1 then multiples by 26 then rounds down and finally adds 97 to access lower case letters
function getRandomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//generates a random number between 0 and 1 then multiples by 26 then rounds down and finally adds 65 to access upper case letters

function getRandomupper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generates a random number between 0 and 1 then multiples by 10 then rounds down and finally adds 48 to access numbers

function getRandomnumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Generates random symbol by selecting a number between 0-1 multiples by number of symbols  then rounds down giving a postion value of a symbol to generate. 
function getRandomsymbol() {
  const symbols = '!"#$%&<><],.-_=^@?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
