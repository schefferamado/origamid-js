//==== forEach e eventos

// const imgSrc = document.querySelectorAll("img");

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src, this);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});

// Exercicios

// 1)Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links.

const linkInterno = document.querySelectorAll('a[href^="#"]');

function func(event) {
  event.preventDefault();

  linkInterno.forEach((item) => {
    item.classList.remove("azul");
  });
  event.currentTarget.classList.toggle("azul");
}

linkInterno.forEach((item) => {
  item.addEventListener("click", func);
});

// 2)Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// function func1(event) {
//   console.log(event.currentTarget);
// }

// const all = document.querySelectorAll("body *");
// all.forEach((item) => {
//   item.addEventListener("click", func1);
// });

// 3) Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function func2(event) {
//   console.log(event.currentTarget.remove());
// }

// const al = document.querySelectorAll("body *");
// al.forEach((item) => {
//   item.addEventListener("click", func2);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function func3(event) {
  if (event.key === "t") e;
}
window.addEventListener("keydown", func3);
