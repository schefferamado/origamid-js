// transversing e manipulacao do dom

const lista = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

// contato.appendChild(lista); // dentro de contato, insira lista ao final
// contato.insertBefore(lista, titulo); // insere a lista antes do titulo
// contato.removeChild(titulo); // remove o titulo
// contato.replaceChild(lista, titulo); // substitui o titulo pela lista

// CRIACAO DE NOVOS ELEMENTOS com create element

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo titulo";
novoH1.classList.add("titulo");

const mapa = document.querySelector(".mapa");

// mapa.appendChild(novoH1);

// CLONAR ELEMENTOS
