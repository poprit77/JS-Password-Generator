// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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
console.log(getRandomlower());

console.log(getRandomupper());

console.log(getRandomnumber());

console.log(getRandomsymbol());