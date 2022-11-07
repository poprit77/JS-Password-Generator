

const randomFunc = {
  Lowercase: getRandomlower,
  uppercase: getRandomnumber,
  numerical: getRandomnumber,
  symbol: getRandomsymbol,
}

var password = {
  inputL: 8,
  Lowercase: true,
  uppercase: true,
  symbol: true,
  numerical: true,
  finalPassword: "password",
  generatePassword: '',
  generatedPassword: ""
}

var finalPassword;
var inputL;

function GivePrompts() {
  var L1;
  password.inputL = prompt("Enter a value between 8-128")
  while (password.inputL < 8 || password.inputL > 128 || isNaN(password.inputL)) {
    if (isNaN(password.inputL)) {
      alert("this is NAN");
      password.inputL = prompt("Enter a value between 8-128")
    } else if (password.inputL < 8 || password.inputL > 128) {
      alert("please enter a value between 8-128");
      password.inputL = prompt("Enter a value between 8-128")
    }
    else {
      return
    }
  } {
    password.Lowercase = confirm("Use lowercase variable?");

    password.uppercase = confirm("Use uppercase variable?");

    password.symbol = confirm("Use symbol variable?");

    password.numerical = confirm("Use numerical variable?");

    Lowercase = getRandomlower,
      uppercase = getRandomnumber,
      numerical = getRandomnumber,
      symbol = getRandomsymbol,
      //   console.log(password.inputL);
      // console.log(password.Lowercase);
      // console.log(password.uppercase);
      // console.log(password.numerical);
      // console.log(password.symbol);

      // console.log(Lowercase());
      // console.log(uppercase());
      // console.log(numerical());
      // console.log(symbol());


      generatePassword(password.Lowercase, password.uppercase, password.numerical, password.symbol, password.inputL);
  }
}
function generatePassword(Lowercase, uppercase, numerical, symbol, inputL) {
  // console.log(Lowercase)
  // console.log(password.Lowercase)
  let generatePassword = '';
  let generatedPassword = '';
  const typesCount = password.Lowercase + password.uppercase + password.numerical + password.symbol;
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
      // console.log(type)
      // console.log(funcName)
      generatedPassword += randomFunc[funcName]();
    });
  }
  // console.log(inputL)
  // console.log(password.inputL)
  // console.log(generatePassword)
  const finalPassword = generatedPassword.slice(0, password.inputL);
  console.log({ finalPassword })
  return finalPassword;

}
const textarea = document.getElementById("Your Secure Password");
finalPassword.innerHTML = "finalPassword";


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
