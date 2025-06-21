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
function Animal(raca, idade, preco) {
  this.raca = raca;
  this.idade = idade;
  this.preco = 2000;

  return console.log(raca, idade, preco);
}

const cachorro = new Animal("Pastor", 18);
cachorro.porte = "grande";
