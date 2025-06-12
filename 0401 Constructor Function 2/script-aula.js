//======= Criação d um objeto puro, sem construtor ========.
// const Dom = {
//   seletor: "li",
//   elemento() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.elemento().classList.add("ativo");
//   },
// };

// Dom.ativo(); //adiciona ativo ao li
// Dom.seletor = "ul";
// Dom.ativo(); //adiciona ativo ao ul

// === Trasnformar o objeto acima em uma função construtora ===

function Dom(seletor) {
  this.ativa = function (seletor) {};
}
