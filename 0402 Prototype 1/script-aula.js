// o prototype é o núcleo do JavaScript
// os protótipos estão sempre ligados as funcções
// Pode-se entender o prototype como um objeto que contém propriedades e métodos
// que podem ser compartilhados entre todas as instâncias de uma função construtora
// O prototype é um objeto que é adicionado automaticamente a todas as funções construtoras
// O prototype é acessado através da propriedade prototype da função construtora
// O prototype é usado para adicionar propriedades e métodos a todas as instâncias de uma função construtora

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.hobby = function (tipo) {
    return tipo;
  };
}

console.log(Pessoa.prototype);

// funcao.prototype:
// É possível adicionar novas propriedades e métodos ao  objeto prototype.
// EX:
Pessoa.prototype.andar = function () {
  return `${this.nome} está andando`;
};

Pessoa.prototype.nadar = function () {
  return `${this.nome} nadou`;
};
Pessoa.prototype.treinou = function (esporte) {
  return `${this.nome} treinou ${esporte}`;
};

Pessoa.prototype.profissao = function (profissaoTitle) {
  return `A pessoa ${this.nome} tem a seguinte profissao ${profissaoTitle}`;
};

const adriano = new Pessoa("Adriano", 39);
console.log(Pessoa.prototype);

const danielle = new Pessoa("Danielle", 35);

// O objeto criado, sempre vai procurar o método dentro do construtor, caso não encontre ele vai procurar no protótipo
// ex:

function Animal(categoria) {
  this.categoria = categoria;
  // this.tipo = function () {
  //   return `${this.categoria} é executado dentro do construtor`;
  // };
}

Animal.prototype.tipo = function () {
  return `${this.categoria} executado dentro do protótipo`;
};

const perrito = new Animal("Cachrro");

console.log(perrito.tipo());

// A propriedade __proto__ é de uso exclusivo do navegador.

// Herança de protótipo:

// O que é o construtor Object?
