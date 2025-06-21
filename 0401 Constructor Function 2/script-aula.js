// function Carro(marca, precoInicial) {
//   this.marca = marca;
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.preco = precoFinal;
//   console.log(this);
// }

// const fiat = new Carro("fiat", 200);

//== Outro exemplo====
// function Veiculo(tipo, cilindrada, ano, precoInicial) {
//   const taxa = 1.4;
//   this.tipo = tipo;
//   this.cilindrada = cilindrada;
//   this.ano = ano;
//   const precoFinal = precoInicial * taxa;
//   //preciso atribuir o this ao preco para que o valor consiga ser visível externamente.
//   this.preco = precoFinal;
//   return tipo, cilindrada, ano, precoFinal;
// }

// const moto = new Veiculo("suzuki", 1200, 1986, 1200);

//====== Exemplo real para a utilização de objetos ========

// criação de objeto:
//obs: sempre que utilizarmos a palavra chave reservada this, estamos criando ou acesso variaveis do objeto.
// const Dom = {
//   seletor: "li",

//   elemento() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.elemento().classList.add("teste");
//   },
// };
// Dom.seletor = "ul";
// Dom.ativar();

//==== Criando uma função construtora ========

function Dom(seletor) {
  this.elemento = function () {
    return document.querySelector(seletor);
  };
  //lembre-se sempre de utizar parametros(este é o poder do objeto)
  this.ativar = function (classe) {
    this.elemento().classList.add(classe);
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
ul.ativar("active");
