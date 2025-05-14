// #### Aula 205 funções 1
//function declaration, e a declaracao de uma funcao.
// FUNCOES RECEBEM PARAMETROS !
function areaQuadrada(area) {
  return area * area;
}

console.log(areaQuadrada(2));

function pi() {
  return 3.14;
}

let total = 2 * pi();
console.log("total de pi= " + total);

//## Diferenç entre parametro e argumeno.

//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.

//  # PARAMETRO:
// Funções recebem parametros
// ex:
// function imc(altura, peso) {
//   var imc = peso / altura ** 2;
//   return imc;
// }

//# ARGUMENTO :
// quando chamamos uma funcao, passamos os argumentos.
//ex:
// console.log(imc(81, 1.7));

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "voce gosta do ceu azul";
//   } else if (cor === "verde") {
//     return "voce gosta de mato";
//   } else {
//     return " voce nao gosta de nada";
//   }
// }
// console.log(corFavorita());

// addEventListener("click", function () {
//   console.log("oi");
// });

// function imc(peso, altura) {
//   var imc = peso / (altura * altura);
//   return imc;
// }

// console.log(imc(90, 1.49));

function corFavorita(cor) {
  if (cor === `Azul`) {
    return `voce gosta de ceu`;
  } else if (cor === `verde`) {
    return `voce gosta de natureza`;
  } else {
    return `voce nao gosta de nada`;
  }
}
console.log(corFavorita(`verde`));

// Argumentos podem ser funcoes
// vamos chamar uma funcoa e passar dois parametros, uma string e uma funcao anonima.

addEventListener(`click`, function () {
  console.log(`clicou`);
});
