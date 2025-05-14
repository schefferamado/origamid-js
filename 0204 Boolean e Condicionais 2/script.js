// --------Operadores logicos &&-------------

/*
o Operador && vai retornar o primeiro valor falso que ele econtra.

(5-5) && (5+5) // neste casa vai retornar 0, pois zero e false. ou seja ele retornou o primeiro false que foi encontrado.

*/

// if (5 - 5 && 5 + 5) {
//   console.log(`Verdadeiro`);
// } else {
//   console.log(`false`);
// }

// OPERADOR LOGICO ||
// Esse operador vai retornar o promeiro `true`, que for encontrado na sentenca.

// --------- OPERADOR SWITCH ----------

// var corFavorita1 = `Amarelo`;

// switch (corFavorita1) {
//   case `Azul`:
//     console.log(`Olhe para o ceu`);
//     break;

//   case `roxo`:
//     console.log("Vamos dancar");
//     break;

//   case `Amarelo`:
//     console.log(`acertoou`);

//   default:
//     break;
// }

// ## 1)Qual o resultado da seguinte expressao?

// var total =10+5\*2/2+20;

// resultado = 35

// 2)Crie duas expressoes que retornem NaN
//const a = 1;
// const b = `ola`;
// const total = a*b;
// console.log("valor total"+ total);

// 3)Somar a String `200` com o numero 50 e retornar 250.

// const x = "200";
// const b = 50;
// const resul= +x+b;
// console.log(resul);

//4) Incremente o valor 5 e retorne seu valor incrementado;
// let x = 5;

// console.log(x);

// testando operadores !=

// let nome = "Adriano";

// if(nome !="adriano"){
//   console.log("dirente")
// }else{
//   console.log("igual");
// }

// Aula 204 2.
// utilizacao do switch

// var corFavorita = "roxo";

// switch (corFavorita) {
//   case "azul":
//     console.log("olhe para o ceu");
//     break;

//   case "amarelo":
//     console.log("Olhe para o sul");
// }

/// Exercicios aula 0204 Boolean e Condicionais 2

// Verifique se a sua idade é maior do que a de algum parente
let minhaIdade = 38;
let idadeMae = 55;

// if (minhaIdade > idadeMae) {
//   console.log(`sou mais velho`);
// } else {
//   console.log(`sou mais novo`);
// }

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// if (minhaIdade > idadeMae) {
//   console.log(`e maior`);
// } else if (minhaIdade < idadeMae) {
//   console.log(`e menor`);
// } else {
//   console.log(`e igual`);
// }

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// console.log(
//   !!nome,
//   !!idade,
//   !!possuiDoutorado,
//   !!empregoFuturo,
//   !!dinheiroNaConta
// );

// Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;

// if (brasil > china) {
//   console.log(`Brasil tem mais habitantes`);
// } else {
//   console.log(`china tem mais habitantes`);
// }

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // aqui imprimie cao
} else {
  console.log("Falso");
}
