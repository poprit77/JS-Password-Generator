
// // Creates resultsfor HTMl to grab
// const GeneratedPasswordEL = document.getElementById('Generated Password');
// const lengthEL = document.getElementById('length');
// const uppercaseEL = document.getElementById('uppercase');
// const lowercasetEL = document.getElementById('lowercaset');
// const symbolstEL = document.getElementById('symbolst');
// const generateEL = document.getElementById('generate');
// const clipboardEL = document.getElementById('clipboard');


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

// clipboardEL.addEventListener('click', () => {
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
// // validating selecttor info and returning final password
// potentially excess code
// function generatePassword(Lowercase, uppercase, numerical, symbol, inputL) {

//   let generatePassword = '';

//   const typesCount = Lowercase + uppercase + numerical + symbol;

//   const typesArr = [{ Lowercase }, { uppercase }, { numerical }, { symbol }].filter
//     (
//       item => Object.values(item)[0]
//     );
//   if (typesCount === 0) {
//     return '';
//   }
//   for (let i = 0; i < inputL; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];

//       generatePassword += randomFunc[funcName]();
//     });
//   }

//   const finalPassword = generatedPassword.slice(0, inputL);

//   return finalPassword;
// }



var password = {
  inputL: 8,
  Lowercase: true,
  uppercase: true,
  symbol: true,
  numerical: true,
  finalPassword: "password"
}

var finalPassword;
var inputL;

function GivePrompts() {
  var L1;
  password.inputL = prompt("Enter a value between 8-128");
  if (inputL > 8 && inputL < 128){
    return inputL;
  } else{
    alert("please enter a value between 8-128")
  }
  {
    password.Lowercase = confirm("Use lowercase variable?");

    password.uppercase = confirm("Use uppercase variable?");

    password.symbol = confirm("Use symbol variable?");

    password.numerical = confirm("Use numerical variable?");

    Lowercase = getRandomlower,
      uppercase = getRandomnumber,
      numerical = getRandomnumber,
      symbol = getRandomsymbol,
      console.log(password.inputL);
    console.log(password.Lowercase);
    console.log(password.uppercase);
    console.log(password.numerical);
    console.log(password.symbol);

    console.log(Lowercase());
    console.log(uppercase());
    console.log(numerical());
    console.log(symbol());

  }
  function generatePassword(Lowercase, uppercase, numerical, symbol, inputL) {
    let generatePassword = '';
    const typesCount = Lowercase + uppercase + numerical + symbol;
    const typesArr = [{ Lowercase }, { uppercase }, { numerical }, { symbol }].filter
      (
        item => Object.values(item)[0]
      );
    if (typesCount === 0) {
      return '';
    }
    for (let i = 0; i < inputL; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatePassword += randomFunc[funcName]();
      });
    }
    const finalPassword = generatedPassword.slice(0, inputL);
    return finalPassword;
  }
  console.log(generatePassword());
}



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

// console.log(getRandomlower());

// console.log(getRandomupper());
// console.log(getRandomnumber());
// console.log(getRandomsymbol());
