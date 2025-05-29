// // transversing e manipulacao do dom
// // const firtElemento = document.querySelector(".menu");
// // const coloca = document.querySelector("body");
// // const copy = document.querySelector(".copy");
// // coloca.insertBefore(copy, firtElemento);

// //appendChild => acrescentar filho:

// // contato.appendChild(lista); // dentro de contato, insira lista ao final
// // contato.insertBefore(lista, titulo); // insere a lista antes do titulo
// // contato.removeChild(titulo); // remove o titulo
// // contato.replaceChild(lista, titulo); // substitui o titulo pela lista

// // CRIACAO DE NOVOS ELEMENTOS com create element

// // const novoH1 = document.createElement("h1");
// // novoH1.innerText = "Novo titulo";
// // novoH1.classList.add("titulo");

// // const mapa = document.querySelector(".mapa");

// // mapa.appendChild(novoH1);

// // CLONAR ELEMENTOS

// ///=========== CRIAÇÃO DE NOVOS ELEMENTOS ========
// //Podemos criar novos elementos com o método createElement();

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");

// const novoH1 = document.createElement("h1");
// // novoH1.innerText = "Novo Título";
// // novoH1.classList.add("titulo");

// contato.appendChild(novoH1);

// ///=========== CLONAR ELEMENTOS ========

// const menu = document.querySelector(".menu");

// const cloneMenu = menu.cloneNode(true);

// const copy = document.querySelector(".copy");
// // copy.appendChild(cloneMenu);

// const h1 = document.querySelector("h1");
// const newTitle = h1.cloneNode(true);
// const faq = document.querySelector(".faq");
// faq.appendChild(newTitle);

//=========== 0309 NAVEGAÇÃO POR TABS ===================
