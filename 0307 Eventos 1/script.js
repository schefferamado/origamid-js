///======= Eventos :
// o eventListner recebe tres parametros:
//addEventListener('click', callback, Option)
// click: o tipo de evento sera sempre uma string
// callback : sera um tipo de funcao.
// option:

const img = document.querySelector("img");

img.addEventListener("click", () => {
  alert("clicou");
});

//

const animaisLista = document.querySelector(".animais-lista");

function callBack(event) {
  console.log(event.currentTarget);
  console.log(event.target);
}

const linkInterno = document.querySelector('a[href^="https"]');

function callBack(event) {
  event.preventDefault();
  //const attr = this.getAttribute("href");
  if (this.getAttribute("href") === "https://www.origamid.com/") {
    alert("igual");
  }
}
linkInterno.addEventListener("mouseover", callBack);

function funcWindow() {
  window.addEventListener("resize", () => {
    alert("resized");
  });
}

const h1 = document.querySelector("h1");

function handleEvent(event) {
  if (event.key === "b") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handleEvent);

// === event
// :o primerioro parametro do callback sera referente ao evento que ocorreu.
// o evento podera ter varias propriedades. ex: event.currentTarget.

// === Boa pratica: Separa a funcao do callback, ex:

//======= exemplo de target e currentTarget ========
// const animaisLista = document.querySelector(".animais-lista");

// function funcAnimais(event) {
//   console.log(event.currentTarget); // o currentTarget sempre sera o elemento que esta escutando o evento.
//   console.log(event.target); // o target sera o elemento que disparou o evento.
// }
// animaisLista.addEventListener("click", funcAnimais);

//====== eventDefault:
// event.preventDefault() => e um metodo de event que previne o comportamento padrao de um evento
//ex: previnir o compartamento padrao de um link, que direciona para paginas externoas.

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

// const linkInterno = document.querySelector();
// const pera = documento.querySelector('a[href^="http"]');
