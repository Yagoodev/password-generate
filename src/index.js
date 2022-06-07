/* =========== Generate password manager =========== */

const controller = [{
    slug: "upper",
    selected: false,
    include: Uppercase
  }, {
    slug: "lower",
    selected: true,
    include: Lowercase
  }, {
    slug: "symbols",
    selected: true,
    include: Symbol
  }, {
    slug: "numbers",
    selected: true,
    include: Numbers
  }
];

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", "?", "ß", "Γ", "π", "Σ", "!", "µ", "τ", "Φ", "Θ", "Ω", "δ", "∞", "φ", "ε", "∩",];

let = password = [];
let = passwordLength = 30;

generateNewPassword();

if(password.length > passwordLength) {
  password = password.toString().replace(/,/g, "").substring(0, passwordLength);
} else {
  password = password.toString().replace(/,/g, "");
}


/* =========== Generate password initialization =========== */

function generateNewPassword() {
  const currentOptions = setSelectedOptions();

  currentOptions.map((option) => {
    option.include();
  });

  shufflePassword(password);
}

function setSelectedOptions() {
  const selectedOptions = controller.filter(option => {
    return option.selected !== false
  });

  return selectedOptions;
}

function shufflePassword(pass) {
  // Algoritmo de fisher-yates
  for (let currentIndex = pass.length - 1; currentIndex > 0; currentIndex--) {
    let randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    let temp = pass[currentIndex];

    pass[currentIndex] = pass[randomIndex];
    pass[randomIndex] = temp;
  }
}


/* =========== Generate password functions core =========== */

function Uppercase() {
  for (let currentIndex = 1; currentIndex <= passwordLength; currentIndex++) {
    let shortIndexLetter = Math.floor(Math.random() * (alphabet.length - 1) + 1);

    alphabet.filter((letter, index) => {
      if (shortIndexLetter === index) {
        password.push(letter);
      }
    })
  }
}

function Lowercase() {
  for (let currentIndex = 1; currentIndex <= passwordLength; currentIndex++) {
    let shortIndexLetter = Math.floor(Math.random() * (alphabet.length - 1) + 1);

    alphabet.filter((letter, index) => {
      if (shortIndexLetter === index) {
        password.push(letter.toLowerCase());
      }
    })
  }
}

function Symbol() {
  for (let currentIndex = 1; currentIndex <= passwordLength; currentIndex++) {
    let shortIndexSymbol = Math.floor(Math.random() * (symbols.length - 1) + 1);

    symbols.filter((symbol, index) => {
      if (shortIndexSymbol === index) {
        password.push(symbol);
      }
    })
  }
}

function Numbers() {
  for(let currentIndex = 1; currentIndex <= passwordLength; currentIndex++) {
    const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

    password.push(randomNumber.toString());
  }
}

module.exports = {
  password
}