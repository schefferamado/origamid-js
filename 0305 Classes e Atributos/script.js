//  ### AULA 0305 Classes e Atributos
// classList

// const menu = document.querySelector(".menu");
// console.log(menu);

// const animais = document.querySelector(".animais");

// Utilizando o getAttribute e setAttribute
//Exemplo de uso.

// const img = document.querySelector(`img`);
// console.log(
//   img.getAttribute(`src`),
//   img.setAttribute("alt", `Texto alternativo`), // seta o valor para o alt
//   img.hasAttribute(`id`), // retorna true ou false se tem este atributo
//   img.removeAttribute(`alt`) // remove o atributo alt
// );
// img.setAttribute(`alt`, "e uma raposa");

// tudo e propriedade e metodo(fiuncoes),
// metodos/funcoes : sempre vamos passar atributos
// propriedade: geralmente sao apenas de leitura.

// Exercicios
// // 1) Adicione a classe ativo a todos os itens do menu
// const ativos = document.querySelectorAll(".menu ul li a");
// ativos.forEach((itens) => {
//   // itens.setAttribute("class", "ativo");
//   console.log(itens);
// });

// const addAtivo = document.querySelectorAll(`.menu a`);
// addAtivo.forEach((item) => {
//   item.classList.add("ativo");
//   // item.setAttribute(`class`, `ativa`);
// });

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// addAtivo.forEach((item) => {
//   item.classList.remove("ativo");
//   // item.setAttribute(`class`, `ativa`);
// });
// addAtivo[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
// const allImg = document.querySelectorAll("img");

// const verifica = allImg .forEach((item, index) => {
//   console.log(item.hasAttribute(`alt`), index);
// });

// Modifique o href do link externo no menu
// const internalLink = document.querySelector("a[href^='ht']");
// const newLink = internalLink.setAttribute("href", "https://www.google.com.br");
// const targ = internalLink.setAttribute("target", "_blanck");

// const teste = document.querySelectorAll(".grid-section");

// Exercicios.

// Adicione a classe ativo a todos os itens do menu

const ativa = document.querySelectorAll(".menu a");

// ativa.forEach((item) => {
//   item.setAttribute("class", "ativo");
// });

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// ativa.forEach((item) => {
//   item.classList.remove(`ativo`);
// });
// ativa[0].classList.add("ativo");
// ativa.forEach((item) => {
//   console.log(item);
// });

// Verifique se as imagens possuem o atributo alt
const altimg = document.querySelectorAll("img");
altimg.forEach((img) => {
  const possui = img.hasAttribute("alt");
  console.log(img, possui);
});

// Modifique o href do link externo no menu

const linkEx = document.querySelector('a[href^="h"]');
linkEx.setAttribute("href", "google.com.br");

console.log(linkEx);
