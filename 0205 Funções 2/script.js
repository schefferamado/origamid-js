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

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// let myAge = 38;
// let relative = 55;

// if (myAge > relative) {
//   alert("Sou mais velho");
// } else if (myAge === relative) {
//   alert("idade igual");
// } else {
//   alert("Su mais novo");
// }

// Qual valor é retornado na seguinte expressão?
// var expressao = 5 - 2 && 5 - " " && 5 - 2;

// console.log("valor expressao " + expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = "Andre"; //Truthy
// var idade = 28; // Truthy
// var possuiDoutorado = false; // Falsy
// var empregoFuturo; // Falsy
// var dinheiroNaConta = 0; // Falsy

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

// if (brasil < china) {
//   console.log("Brasil é mior");
// } else {
//   console.log("China é maior");
// }

// O que irá aparecer no console?
// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }
// False

// O que irá aparecer no console?
// if ("Gato" === "gato" || 5 > 2) {
//   console.log("Gato" && "Cão");
// } else {
//   console.log("Falso");
// }

//cao

// #### Aula 205 funções 1

// function areaQuadrada(area) {
//   return area * area;
// }

// console.log(areaQuadrada(2));

// function pi() {
//   return 3.14;
// }

// let total = 2 * pi();
// console.log("total de pi= " + total);

//## Diferenç entre parametro e argumeno.
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

// ################ Aula 205 funções 2 ############
// uma funnçao sempre vai retornar um valor, mesmo quando nao a palavra chave `return`. Quando nao ha return, o valor retornado sera `undefined`.
// function imc(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(imc);
// }
// imc(80, 1.8);
// console.log(imc(80, 1.8));

// Uma funcoo pode retornar qualquer tipo de dado inclusive uma outra funcao.
// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "informe um valor numerico";
//   } else if (idade >= 60) {
//     return "idoso";
//   } else {
//     return "nao é idoso";
//   }
// }

// function faltaVisitar(visitados) {
//   var totalPaises = 193;
//   return `Faltam visitar ${totalPaises - visitados} paises`;
// }
// var profisao = ` designer`;
// function dados() {
//   var nome = `Adriano`;
//   var idade = 36;
//   var sexo = `m`;
//   function outrosDados() {
//     var cidade = `NH`;
//     var regiao = `RS`;
//     return `Dados da pessoa ${nome}, ${idade}, ${sexo}, ${cidade},${regiao}, ${profisao} sao os dados da pessoa`;
//   }
//   return outrosDados();
// }

// function terceiraIdade(idade) {
//   if (typeof idade !== `number`) {
//     return `informe uma idade!`;
//   } else if (idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(terceiraIdade(`ola`));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta Visitar ${totalPaises - paisesVisitados}`;
}
var profissao = `design`;

function dados() {
  var nome = `Adriano`;
  var idade = 38;
  function outrosDados() {
    var endereco = `Rio Grande Do Sul`;
    var idade = 37;

    return `${nome} ${idade} ${endereco} ${profissao}`;
  }

  return outrosDados();
}
