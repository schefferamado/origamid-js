// ################ Aula 205 funções 3 ############

// Crie uma função para verificar se um valor é Truthy

// function tru(value) {
//   // if (valor !== 0 && valor !== `` && valor !== undefined && valor !== false) {
//   //   return `o valor ${valor} é considerado como truthy`;
//   // } else {
//   //   return `valor é Falsy`;
//   // }

//   return !!valor;
// }

function isTrhuty(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
  var perimetro = lado * 4;
  return perimetro;
}

// function quadrado(lado) {
//   var perimetro = lado * lado;
//   return perimetro;
// }

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `Nome completo : ${nome} ${sobrenome}`;
}

var nome = nomeCompleto(`Adriano`, `Scheffer Amado`);
console.log(nome);

// function fullName(nome, sobrenome) {
//   return ` Nome completo: ${nome} ${sobrenome}`;
// }

// Crie uma função que verifica se um número é par

function isEven(num) {
  if (num % 2 === 0) {
    console.log(`par`);
  } else {
    console.log(`impar`);
  }
}

isEven(4);

// function par(numero) {
//   if (numero % 2 === 0) {
//     return `o numero ${numero} e par`;
//   } else {
//     return `o numero ${numero} e impar`;
//   }
// }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(tipo) {
  return typeof tipo;
}

// function tipo(dado) {
//   return `o tipo de dado é ${typeof dado}`;
// }

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener(`scroll`, function () {
  console.log(`Adriano Amado`);
});

// addEventListener(`scroll`, () => {
//   console.log(`Adriano`);
// });

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
