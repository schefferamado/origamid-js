// const imgSrc = document.querySelectorAll("img");

// function funcImg(event) {
//   const src = event.currentTarget.getAttribute("src");
//   console.log(src);
// }

// imgSrc.forEach((img) => {
//   img.addEventListener("click", funcImg);
// });

// Exercicios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const internalLinks = document.querySelectorAll('a[href^="#"]');

// function hadleClick(event) {
//   event.preventDefault();
//   internalLinks.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   this.classList.add("ativo");
//   console.log("adicionado com sucesso");
// }

// internalLinks.forEach((link) => {
//   link.addEventListener("click", hadleClick);
// });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const allElementos = document.querySelectorAll("body *");

// function handleEl(event) {
//   console.log(event.currentTarget);
// }

// allElementos.forEach((el) => {
//   el.addEventListener("click", handleEl);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const allElementos = document.querySelectorAll("body *");

// function printEl(e) {
//   e.target.remove();
// }

// allElementos.forEach((item) => {
//   item.addEventListener("click", printEl);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function hadleKeyDow(event) {
  if (event.key === "t") {
    document.documentElementclassList.toggle("texto-maior");
  } else {
    console.log(event.key);
  }
}

window.addEventListener("keydown", hadleKeyDow);
