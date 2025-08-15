// Exercicios

// 1)Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// 2)Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoas.prototype.nomeCompleto = function () {
  return `Nome completo: ${this.nome} ${this.sobrenome}`;
};

//3) Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// o prototype lista tudo sobre o objeto.
// console.log(NodeList.prototype);
// console.log(HTMLAllCollection.prototype);
// console.log(Document.prototype);

//pode ser feito da seguinte forma também:
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//Document : Função construtora.
//document: É o objeto que foi construído.

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name); //HTMLLIElement
console.log(li.click.constructor.name); //Function
console.log(li.innerText.constructor.name); // String
console.log(li.value.constructor.name); // Number
console.log(li.hidden.constructor.name); // Boolean
console.log(li.offsetLeft.constructor.name); // Number

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name); // Boolean
