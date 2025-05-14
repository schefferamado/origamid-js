// ## 1)Qual o resultado da seguinte expressao?

var total = 10 + (5 * 2) / 2 + 20;

// resultado = 35

// 2)Crie duas expressoes que retornem NaN
let nome = `Adriano`;
console.log(22 * nome);

// 3)Somar a String `200` com o numero 50 e retornar 250.

const a = +`200`;
const num = 50;
const resul = a + num;
console.log(resul);

//4) Incremente o valor 5 e retorne seu valor incrementado;
let x = 5;

console.log(++x);

//Operadores Aritmeticos Unarios:

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 6;
console.log(++incremento2); //6
console.log(incremento2); //6

//5) Como Dividir o peso por dois:
var numero = +`80` / 2;
var unidade = `kg`;

var peso = numero + unidade; //`80kg`
var pesoporDois = peso; //NaN

console.log(pesoporDois);
