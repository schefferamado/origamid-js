// Construtores Nativos:
// Objetos, Funcções, Números Strings e outros tipos de dados são criados utilizando construtores:

// Ex:

const pais = "Brasil";
const cidade = new String("RS");

pais.charAt(0);
cidade.charAt(0);

const animais = ["cchoro", "gato", "cavalo"];
// transformando uma lista em array:
const listaArray = Array.prototype.slice.call(animais);

//converter uma lista em um array:
const listaArray1 = Array.from(animais);

//Podemos pegar os métodos de um objeto, e verificar a diferença, pois há diferença dos métodos que foram criados com o CONSTRUTOR  E PROTOTYPE

// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));

function Pessoa(nome) {
  this.nome = nome;

  this.mostraNome = function () {
    return this.nome;
  };
}

Pessoa.prototype.correr = function () {
  return this.nome;
};

// console.log(Object.getOwnPropertyNames(Pessoa));
// console.log(Object.getOwnPropertyNames(Pessoa.prototype));

//como saber o nom do construtor de um objeto:
//dado.constructor.nome;

function Carro(preco) {
  this.preco = preco;

  this.acelerar = function () {
    return "acelerando";
  };
}

const fiat = new Carro("Fiat uno");

// Podemos descobrir o tipo de retorno desta forma:
console.log(fiat.preco.constructor.name);
console.log(fiat.constructor.name);
console.log(Carro.constructor.name);
