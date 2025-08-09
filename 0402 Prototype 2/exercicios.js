// 1) Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log(` ${this.nome} andou`);
  };
}

// 2) Crie 3 pessoas:
// João - 20 anos,
// Maria - 25 anos,
// Bruno - 15 anos

// const joao = new Pessoa("João", 20);
// const maria = new Pessoa("Maria", 25);
// const bruno = new Pessoa("Bruno", 15);

// 3) Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// -> elements, retorna NodeList com os elementos selecionados
// -> addClass(classe), adiciona a classe a todos os elementos
// -> removeClass(classe), remove a classe a todos os elementos

function Dom(elemento) {
  this.retornaElemento = function () {
    return document.querySelectorAll(elemento);
  };

  this.adicionaClasse = function (classe) {
    this.retornaElemento().forEach((element) => {
      element.classList.add(classe);
    });
  };

  this.removeClasse = function (classe) {
    this.retornaElemento().forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const li = new Dom("li");
li.adicionaClasse("red");
li.removeClasse("red");
