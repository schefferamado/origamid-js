// Tipos de dados #####
// Existem 7 tipode de dados

//1- Boolean
var faculdade = true;

//2- String
var nome = "Adriano";

//3- Number
var idade = 32;

//4- Undefined
var time;

//5- Symbol
var simbolo = Symbol();

//6- Object
var objeto = {};

//7- Null ->
var comida = null;

// 'Adriano'
// "Adriano"
// `Adriano`

var frase = 'este e o "melhor" jogador';

// console.log(frase);

// Para manipular Strings a melhor forma e a utilizacao de `template String`
//ex:
var gols = 1000;
var frase1 = `Romario fez ` + gols + ` gols`;
var frase2 = `Romario fez ${gols} gols`;

// console.log(frase1);
// console.log(frase2);

// Declare uma variável contendo uma string
var cor = `Amarelo`;

// Declare uma variável contendo um número dentro de uma string
var apto = `204`;

// Declare uma variável com a sua idade
var minhaIdade = 39;

// Declare duas variáveis, uma com seu nome
var meuNome = `Adriano`,
  apelido = `gordo`;

// e outra com seu sobrenome e some as mesmas
var sobrenome = `Scheffer`;
var fullName = `${meuNome}  ${sobrenome}`;

console.log(fullName);

// Coloque a seguinte frase em uma variável: It's time
var frase = `it's time`;
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof fullName);
