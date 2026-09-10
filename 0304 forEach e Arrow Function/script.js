// // AULA 0304 forEach e Arrow Function

// const img = document.querySelectorAll("img");
// img.forEach(function () {});

// //o forEach pode receber tres paramostros : (item, index, array)
// const titulos = document.getElementsByClassName(`titulo`);
// const arrayTitulos = Array.from(titulos);

// arrayTitulos.forEach(function (item) {
//   // console.log(item);
// });

// // ArrowFunctions

// //Exemplo de utilizaco de arrawFunctions

// // const imgss = document.querySelectorAll("img");
// // imgss.forEach((item) => {
// //   // console.log(item.innerText);
// // });

// //  1) Mostre no console cada parágrado do site
// const ps = document.getElementsByTagName("p");
// const arrayPs = Array.from(ps);
// arrayPs.forEach((p) => {
//   // console.log(p.innerText);
// });

// // Mostre o texto dos parágrafos no console
// // const ps = document.getElementsByTagName("p");
// // const arrayPs = Array.from(ps);
// // arrayPs.forEach((p) => {
// //   // console.log(p.innerText);
// // });

// // Como corrigir os erros abaixo:
// const imgsx = document.querySelectorAll("img");

// imgsx.forEach((item, index) => {
//   return console.log(item, index);
// });

// let i = 0;
// imgsx.forEach(() => {
//   console.log(i++);
// });

// imgsx.forEach(() => i++);

// const imgx = document.querySelectorAll("img");

// imgx.forEach((item) => {
//   // console.log(item);
// });

// // console.log(imgx);

// // para interagirmos com os itens de uma nodeList, sera necessario a utilizacao do for loop.

// const tituloss = document.getElementsByClassName("titulo");

// const novoArrayTitulos = Array.from(tituloss);

// novoArrayTitulos.forEach((item) => {
//   // console.log(item);
// });

// Exercicios:
// Mostre no console cada parágrado do site

// const pps = document.querySelectorAll("p");

// pps.forEach((item) => {
//   return console.log(item);
// });

// const allps = document.querySelectorAll("p");
// allps.forEach((item) => {
//   return console.log(item.innerText);
// });

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

/// ==== a partir daqui estou refazendo a aula ====

// const imgs = document.querySelectorAll("img");
// imgs.forEach(function name(item, index, array) {
//   console.log(array);
// });

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);
// titulosArray.forEach(function name(item) {
//   console.log(item.innerHTML);
// });

/// === Arrow Functions ===
// const imgs = document.getElementsByClassName("titulo");
// const arrayImgs = Array.from(imgs);

// arrayImgs.forEach((item) => {
//   console.log(item);
// });

//==== EXERCICIOS ===
// 1) Mostre no console cada parágrafo do site:

// const ps = document.querySelectorAll("p");
// ps.forEach((item) => {
//   console.log(item);
// });

// 2) Mostre o texto dos paragrafos no console.
// const ps = document.querySelectorAll("p");
// ps.forEach((item) => {
//   console.log(item.innerHTML);
// });

// 3) corrija os erros abaixos:

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
