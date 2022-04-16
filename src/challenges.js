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
function setNumber(distcat1, distcat2) {
  return (distcat1 < distcat2) ? distcat2 - distcat1 : distcat1 - distcat2;
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
  let difcat1 = setNumber(mouse, cat1);
  let difcat2 = setNumber(mouse, cat2);
  return compare(difcat1, difcat2);
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
function fizzBuzz(arrayDeNumeros) {
  let tipo = [];
  for (let nums of arrayDeNumeros) {
    if (nums % 3 === 0 && nums % 5 === 0) {
      tipo.push('fizzBuzz');
    } else if (nums % 3 === 0) {
      tipo.push('fizz');
    } else if (nums % 5 === 0) {
      tipo.push('buzz');
    } else {
      tipo.push('bug!');
    }
  }
  return tipo;
}

// Desafio 9
function encode(mensagem) {
  let mensagemCodificada = mensagem.split('');
  for (let index = 0; index < mensagemCodificada.length; index += 1) {
    if (mensagem[index] === 'a') {
      mensagemCodificada[index] = 1;
    } else if (mensagem[index] === 'e') {
      mensagemCodificada[index] = 2;
    } else if (mensagem[index] === 'i') {
      mensagemCodificada[index] = 3;
    } else if (mensagem[index] === 'o') {
      mensagemCodificada[index] = 4;
    } else if (mensagem[index] === 'u') {
      mensagemCodificada[index] = 5;
    } else (mensagemCodificada[index] = mensagem[index]);
  }
  let mensagemCodificadaString = mensagemCodificada.join('');
  return mensagemCodificadaString;
}
encode('hi there');

function decode(criptografia) {
  let mensagemCriptografada = criptografia.split('');
  for (let index = 0; index < mensagemCriptografada.length; index += 1) {
    if (criptografia[index] === '1') {
      mensagemCriptografada[index] = 'a';
    } else if (criptografia[index] === '2') {
      mensagemCriptografada[index] = 'e';
    } else if (criptografia[index] === '3') {
      mensagemCriptografada[index] = 'i';
    } else if (criptografia[index] === '4') {
      mensagemCriptografada[index] = 'o';
    } else if (criptografia[index] === '5') {
      mensagemCriptografada[index] = 'u';
    } else (mensagemCriptografada[index] = criptografia[index]);
  }
  let mensagemCriptografadaString = mensagemCriptografada.join('');
  return mensagemCriptografadaString;
}
decode('h3 th2r2');

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
