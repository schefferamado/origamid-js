// Funcções cnstrutoras são utilizadas para a criação de objetos
//obs: uma funcao vazia, por padrao, retorna undefined.

//construtor 'Carro'
// function Carro(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
// }

// const honda = new Carro("Honda", 3000);
// const fiat = new Carro("Fiat", 2000);

//construtor animal
// sempre que utilizamos o 'this', estamos referenciando uma varíavel do obejto que esta sendo criado, bem ocmo o próprio objeto em si.
function Animal(raca, idade, preco) {
  this.raca = raca;
  this.idade = idade;
  this.preco = 2000;
  return console.log(raca, idade, preco);
}

const cachorro = new Animal("Pastor", 18);
cachorro.porte = "grande";

//Construindo objetos e construtor Carro
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}
const fiat = new Carro("Fiat Uno", 26300);
const honda = new Carro("Honda Civic", 32500);


// Quais são as 5 etapas da criação de um objeto com a palavra-chave 'new'?
const jeep =  new Carro();

//1. Cria um novo objeto
jeep={};

//2. Defini o protótipo.
jeep.prototype = Carro.prototype;

//3. Aponta a variável 'this' para o objeto.
this= jeep;

//4. Executa a função, substituindo o 'this' pelo objeto.
jeep.marca = "Jeep Renegade";
jeep.preco = 120000;


