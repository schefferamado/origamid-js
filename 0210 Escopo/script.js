// `use strict`;

// #### 0210 Escopo #####
// Variaveis declaradas com `var` vazam o bloco.
// Variaveis declaradas com `const` e `let` respeitam o escopo do bloco

// var nao respeita ao escopo de blco
// {
//   var nome = `Adriano`;
// }
// console.log(nome);

// let, respeita o escopo de blooo
// {
//   let sobreName = `Amado`;

// }
// console.log(sobreName);

// Qual a difernca entre `const` e `let`?
// variaveis const sao impedidas de serem redeclaradas ex:
// const mes = `janeiro`;
// mes = `marco`; // uma vez criada a variavel nao pode ser redeclarda.
// console.log(mes); // erro

//#### EXERCICIOS #######

// 1) Podemos alterar os atributos de um objeto constante.

// const data = {
//   dia: 23,
//   mes: `Janeiro`,
// };

//podemos aletar os atributos de um objeto declado const.
// data.dia = 24;
// console.log(data.dia, data.mes);

//Nao podemos alterar o tipo do objeto declado como const
data = `pera`;

// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);
// var é uma palavra reservada e nao um atributo
// as variaveis `marca` e `portas`, estao sendo chamadas pelo console.log fora do escopo

// Como corrigir o erro abaixo?
// const dois = 2;
// function somarDois(x) {
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

// // O que fazer para total retornar 500?
// var numero = 50;

// for (var numero = 0; numero <= 10; numero++) {
//   console.log(numero * 50);
// }

// const total = 10 * numero;
// console.log(total);

/// Exercicios:

// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(cor, marca, portas);
//R: pq as variaveis marca e let, estao sendo declaradas dentro de um escopo de bloco e sendo acessadas fora do escopo.

// Como corrigir o erro abaixo?
// const dois = 2;
// function somarDois(x) {
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

// se numero dentro do for for declarada com var, a variavel vai vazer, e sobescrever o valor atribuido anteriormente.
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
