// ##### 0303 Seleção de Elementos 1

// const animais = document.getElementById(`animais`);

// //vai retornar apenas quando o elemento estiver com essas duas classes juntas
// const classe = document.getElementsByClassName("grid-section animais");

// const gridSection = document.getElementsByClassName("grid-section");

// // seletor que mais vamos utilizar:
// // Ao utilizarmos o querySelector, vamos selecionar os elementos da mesma forma como selecionamos os elementos no CSS
// const seleciona = document.querySelector("li");

// // no query selector sera retornado seompre o primeiro elemento que foi encontrado no document.
// const primeiraLi = document.querySelector(`li`);

// // 1) Vamos selecionar todos os links internos

// const linksInterno = document.querySelector(`[href^='#' ]`);

// // 2) utilizando o querySelectorAll, vamos selecionar toas as imagens dentro da section animais.

// const img = document.querySelectorAll(".animais img");

const gridSection = document.getElementsByClassName(`grid-section`);
const firtLi = document.querySelector("li");
const links = document.querySelector('[href^="#"');

const img = document.querySelectorAll(".animais img");
console.log(img);
