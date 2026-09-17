//adicione a classe ativo a todos os itens do menu

// const ativo = document.querySelectorAll(".menu a");

// ativo.forEach((item) => {
//   item.classList.add("ativo");
// });

// remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro.

// ativo.forEach((item, index) => {
//   if (index === 0) {
//     item.classList.add("ativo");
//   } else {
//     item.classList.remove("ativo");
//   }
// });

//3) Verifiqui se as imagens possuiem o atributo alt

// const imgs = document.querySelectorAll("img");
// imgs.forEach((item) => {
//   item.hasAttribute("alt");
// });

// 4) Modifique o href do link externo no menu;

const hrefExterno = document.querySelector('a[href^="#"]');
hrefExterno.setAttribute("href", "google.com");
console.log(hrefExterno);
