/// ## AULA 0306 Dimensões e Distâncias 1

// HEIGHT E WIDTH
//Estas sao as propriedades e metodos dos objetos `Element` e HTML element, a maioria delas sao read only

const secAnimais = document.querySelector(".animais");

// Podemos saber a altura de elementos, para tanto podemos utilizar os atributos abaixo listados.
// ## ALTURA
// secAnimais.clientHeight; // height + paddin g
// secAnimais.offsetHeight; //height + padding + border
// secAnimais.scrollHeight; //height total , mesmo dentro do scroll

// Podemos pegar a largura de elementos tambem: utilizando os seguintes atributos
// secAnimais.clientWidth;
// secAnimais.offsetWidth;
// secAnimais.scrollWidth;

// const listaAnimais = document.querySelector(".animais-lista");

//Podemos pegar o topo do elemento e o topo da pagina

// offsetTop:Distancia entre o topo do elemento e o topo da pagina . EX:
// listaAnimais.offesetTop;

//offesetLeft: Distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
// listaAnimais.offsetLeft;

//Metodo que retorna um objeto com valores de width, height, distancias do elemento e mais.

// getBoundingClientRect();

// const section2 = document.querySelector(".animais");
// const rect = section2.getBoundingClientRect();

// rect.height; // height do elemento;
// rect.width; //width do elemento;
// rect.top; // distancia entre o topo do elemento e o scroll

// const teste = document.querySelector("h2");

// ##### WINDOW #######

window.innerWidth; // width da janela
window.outerWidth; // Soma dev tools tambem;
window.innerHeight; // heigh da janela;
window.outerWidth; // soma a bara de endereco

window.pageYOffset; //distancia total do scroll horizontal - retona o distacia que a janela ja deu de scroll
window.pageXOffset; //distancia total do scroll vertical

// if (window.innerWidth < 600) {
//   console.log("tela menor ue 600px");
// }

// console.log(`innter width = ${window.innerWidth}`);

// Utilizando matchMedia();
//O matchMedia pode ser utilizado como um verificado de media-querie assim como o css.

// const small = window.matchMedia(`(max-width:600px)`);
//o atributo matches sempre verificara se o matchMedia e verdadeiro ou falso.

// este if tambem podera ser feito desta forma

// if (small.matches) {
//   console.log("Tela menor que 600px");
// } else {
//   console.log("Tela maior que 600px");
// }

// const small1 = window.matchMedia(`(max-width:400px)`).matches;

// if (small1) {
//   console.log("mobile version");
// }

const listaAnimais = document.querySelector(".animais-lista");

console
  .log
  // listaAnimais.scrollHeight,

  // listaAnimais.offsetLeft
  ();

const firth2 = document.querySelector("h2");
const rec = firth2.getBoundingClientRect();
// console.log(rec.height, firth2.clientHeight);

//utilizando macht-media para media-querie.

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  alert("menor que 600px");
} else {
  alert("maior que 600px");
}
