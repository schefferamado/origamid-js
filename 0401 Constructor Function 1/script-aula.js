// Funcções cnstrutoras são utilizadas para a criação de objetos

//construtor 'Carro'
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 2000);
