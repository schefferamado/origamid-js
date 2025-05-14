/// Eventos :
// o eventListner recebe tres parametros:
//addEventListener('click', callback, Option)
// click: o tipo de evento.
// callback : sera um tipo de funcao.
// option

// event : sera o primeiro paramentro do callback
// currentTarget : mostra o grupo geral.
// target: mostra exataemente o elemento detro do grupo que foi clicado.

// const img = document.querySelector("img");

// function callBack(event) {
//   console.log(event.target);
// }

// img.addEventListener("click", callBack);

// const imagensLista = document.querySelectorAll(".animais-lista");

// function callbackLista(event) {
//   console.log(event.curretTart);
// }
// imagensLista.addEventListener("click", callbackLista);

// const preventLink = document.querySelector('a[href^="https"]');

// function callBackPrevent(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// preventLink.addEventListener("click", callBackPrevent);

// const linkInterno = document.querySelector('a[href^="http"]');

// function callBackLink(event) {
//   this.setAttribute("href", "https://www.google.com.br");
// }

// linkInterno.addEventListener("mouseover", callBackLink);

// THIS  e Eventos:
// quando estavamos falando de evendo o this, tera outro significado. Ele fara referencia ao elemento ao qual foi adicionado o addEventListner. e nao ao objeto em si.

// const linkInterno = document.querySelector('a[href^="http"]');

// function callBackMouseover() {
//   this.setAttribute("href", "https://www.terra.com.br");
//   console.log(this.getAttribute.clientHeight);
// }

// linkInterno.addEventListener("mouseover", callBackMouseover);

// const h1 = document.querySelector("h1");

// function hadleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener("click", hadleEvent);

// function funcao(event) {
//   console.log(event.target);
// }

// const imagensLista = document.querySelectorAll(".animais-lista");
// imagensLista.forEach((item) => {
//   item.addEventListener("click", funcao);
// });

const linkInterno = document.querySelector();
const pera = documento.querySelector('a[href^="http"]');
