// ###### Aula 0303 Seleção de Elementos 2

//Diference entre HTMLCollection vs NodeList

//HtmlCollection: tem menos metodos( mas retorna os elentos que estao sendo adicionados ao vido)
// const htmlCollections = document.getElementsByClassName("grid-section");

//NodeList tem mais metodos - ex(nao atualiza de forma ao vivo os itens que vao sendo adicionados)
// const gridSectionNode = document.querySelectorAll(".grid-section");

//  ### Array-like
// Tanto htmlCollection como nodeList sao considerados um arrayLike (tipo array, mas nao sao)
// Podemos iterar elementos apenas nos objetos que retornam uma nodeList, pois somente ele tem o metodo forEach() de iteracao

// const gridSection = document.querySelectorAll(".grid-section");

// gridSection.forEach(function (gridItem, index, array) {
//   gridItem.classList.add("azul");
//   console.log(index);
//   console.log(array);
// });

/// As vezes sera necessario fazer iteracao em um arrayLike, para tanto sera necessario tranformar um HTMLCollection um um array, para tanto utilizaresmo o seguinte metodo.
// const novoArray = Array.from(htmlCollections);
// novoArray.forEach(function (item) {
//   // console.log(item)
// });

/// ### Exercicios:

// // Retorne no console todas as imagens do site
// const allimg = document.querySelectorAll("img");

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const allIMGs = document.querySelectorAll(`img[src^="img/imagem"]`);
// // console.log(allIMGs);

// // Selecione todos os links internos (onde o href começa com #)

// const allInternalLinks = document.querySelectorAll(`a[href^="#"]`);
// // console.log(allInternalLinks);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const firstH2 = document.querySelector(`.animais-descricao h2`);
// // console.log(firstH2.innerHTML);

// // Selecione o último p do site
// const pp = document.querySelectorAll(`p`);
// let ultimoP = pp[pp.length - 1];
// //podemos fazer desta forma tambem
// let ultimoPp = pp[--pp.length];

// console.log(ultimoPp.innerText);

// const gridSection = document.getElementsByClassName("grid-section");

// const gridSectionNode = document.querySelectorAll("grid-section");

// console.log(gridSection);
// console.log(gridSectionNode);

// gridSectionNode.forEach((item, index) => {});
// // converver htmlcollection em nodeList:

// const novoArray = Array.from(gridSection);

// novoArray.forEach((item, index) => {});

//Exercicios:

// 1) Retorne no console todas as imagens do site

// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// 2) Retorne no console apenas as imagens que começaram com a palavra imagem
const allimgs = document.querySelectorAll('img[src^="img/imagem"]');

console.log(allimgs);

// 3) Selecione todos os links internos (onde o href começa com #)

const allHref = document.querySelectorAll("a[href^='#']"); // selecione todos os elementos `a` cuja o atributo href inicie com '#'
console.log(allHref);

// 4) Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(`.animais-descricao h2`);
console.log(h2);

// 5) Selecione o último p do site
const ps = document.querySelectorAll("p");
const lastp = ps[ps.length - 1];
// console.log(lastp);

const teste = document.querySelectorAll("ul li a[class='pera']");

const pFooter = document.querySelectorAll("p[class='footer']");

pFooter.forEach((item) => {
  console.log(item.innerText);
});
