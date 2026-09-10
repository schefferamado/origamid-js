//  ######## 0206 Objetos 1 ##########

// uma propriedade de um objeto pode ser uma funcao.
// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },

// utilizamos o this para acessar os atributos do objeto.

// var pessoa = {
//   nome: `Adriano`,
//   idade: 25,
//   profisao: `Designer`,
//   possuiFaculdade: true,
// };

// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     // Nesta situacao sera necessario utilizar o `this`. Ele quer dizer que a variavel a ser utilizada sera a do proprio objeto, caso nao seja utilizado o `this`, ocorrera um erro de variavel inesistente.
//     // utilizamos o this para acessar os atributos do objeto.
//     return this.lados * lado;
//   },
// };

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
// };

// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     return this.lados * lado; // o this e a mesma coisa que dizer : quadrado.lados, acessa atributos de um objeto atraves do this, dentro da funcao.
//   },
// };
