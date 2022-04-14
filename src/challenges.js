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
  let vitorias = (wins * 3);
  let empates = (ties * 1);
  return vitorias + empates;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  let resultado = numeros[0];
  let final = 0;
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > resultado) {
      resultado = numeros[i];
    }
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === resultado) {
      final += 1;
    }
  }
  return final;
}
console.log(highestCount([-3, -1, -1, -3, -2, -3, -1]));

// Desafio 7
// function catAndMouse(mouse, cat1, cat2) {
//   let distanciagato1 = Math.abs(mouse - cat1);
//   let distanciagato2 = Math.abs(mouse - cat2);
//   if (distanciagato1 < distanciagato2) {
//     return console.log('cat1');
//   } else if (distanciagato1 === distanciagato2) {
//     return console.log('os gatos trombam e o rato foge');
//   } else {
//     return console.log('cat2');
//   }
// }
// catAndMouse(-12, -24, 0);

// if ternario
function setNumber(distanciagato1, distanciagato2) {
  return (distanciagato1 < distanciagato2) ? distanciagato2 - distanciagato1 : distanciagato1 - distanciagato2;
}
function compare(dif1, dif2) {
  let frase = '';
  if (dif1 < dif2) {
    frase = 'cat1';
  }
  if (dif1 > dif2) {
    frase = 'cat2';
  }
  if (frase === '') {
    frase = 'os gatos trombam e o rato foge';
  }
  return frase;
}
function catAndMouse(mouse, cat1, cat2) {
  let difcat1 = setNumber(mouse, cat1)
  let difcat2 = setNumber(mouse, cat2)
  return compare(difcat1, difcat2)
}
catAndMouse(-12, -24, 0);

// let distanciagato1 = Math.abs(mouse - cat1);
// let distanciagato2 = Math.abs(mouse - cat2);
// let resultado = '';
// if (distanciagato1 < distanciagato2) {
//   resultado = ('cat1');
// } else if (distanciagato1 === distanciagato2) {
//   resultado = ('os gatos trombam e o rato foge');
// } else {
//   resultado = ('cat2');
// }
// return console.log(resultado);

// Desafio 8
function fizzBuzz([arrayDeNumeros]) {
  let tipo = [];
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] / 3 % 1 === 0) {
      tipo.push('fizz');
    } else if (arrayDeNumeros[i] / 5 % 1 === 0) {
      tipo.push('buzz');
    } else {
      tipo.push('bunda');
    }
  }
  return console.log(tipo);
}
fizzBuzz([9, 15, 7, 9, 45])

// let dog = 4
// if (dog % 1 === 0) {
//   console.log('inteiro')
// }

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
