
// // Creates resultsfor HTMl to grab
// const GeneratedPasswordEL = document.getElementById('Generated Password');
// const lengthEL = document.getElementById('length');
// const uppercaseEL = document.getElementById('uppercase');
// const lowercasetEL = document.getElementById('lowercaset');
// const symbolstEL = document.getElementById('symbolst');
// const generateEL = document.getElementById('generate');
// const clipboardEL = document.getElementById('clipboard');


// //Prompt

// function GivePrompts() {

// }
// //Psssword generator function
// const randomFunc = {
//   lower: getRandomlower,
//   upper: getRandomnumber,
//   number: getRandomnumber,
//   symbol: getRandomsymbol,
// }

// // listens for click and runs function to grab length and values of check boxes
// //+ sign turns length into number
// //passes to generate password function

// //change to submit link to button 
// generate.addEventListener('click', () => {
//   const length = +lengthEL.value;
//   const hasLower = lowercaseEL.checked;
//   const hasUpper = uppercaseEL.checked;
//   const hasnumber = numberEL.checked;
//   const hassymbol = symbolsEL.checked;

//   GeneratedPasswordEL.innerText = generatePassword(hasLower, hasnumber, hasUpper, hassymbol.length);
// });

// // copy to span
// //potentially add else if
// clipboardEL.addEventListener('click', () =>{
//   const textarea = document.createElement('textarea');
//   const password = GeneratedPasswordEL.innerText;

//   if (!password) {
//     return;
//   }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   //find replacement for execcommand
//   document.execCommand('copy');
//   textarea.remove();
//   alert('password copied to text!');
// });
// //validating selecttor info and returning final password
// //potentially excess code
// function generatePassword(lower, upper, number, symbols, length) {

//   let generatePassword = '';

//   const typesCount = lower + upper + number + symbols;

//   const typesArr = [{ lower }, { upper }, { number }, { symbols }].filter
//     (
//       item => Object.values(item)[0]
//     );
//   if (typesCount === 0) {
//     return '';
//   }
//   for (let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];

//       generatePassword += randomFunc[funcName]();
//     });
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }

//length prompt
function GivePrompts() {
  var length;
  inputL = prompt("Enter a value between 8-128");
  if (length == null || length == "") {
    text = "Enter a value between 8-128";
  } else {
    length = " you have chosen " + inputL + "charcters";

  }
  
}
var inputL;
console.log(inputL)

//generates a  random number between 0 and 1 then multiples by 26 then rounds down and finally adds 97 to access lower case letters
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
