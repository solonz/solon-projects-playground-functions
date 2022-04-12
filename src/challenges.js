// Desafio 1
function compareTrue(power, ranger) {
  if (power === true && ranger === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let separada = string.split(' ');
  return separada;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(param) {
  let array = param;
  let primeira = array[0];
  let ultima = array[array.length - 1];

  return `${ultima}, ${primeira}`;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = (wins * 3)
  let empates = (ties * 1)
  return vitorias + empates
}
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
