// operador ternario:
//ex:

// var idade = 19;
// var podeBeber = idade >= 18 ? `podebeber` : `nao pode beber `;
// console.log(podeBeber);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa ? true : false;
darCredito = possuiCarro && possuiCasa; //dessa forma tambem pode ser feito.

console.log(darCredito);
