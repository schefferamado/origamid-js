//  ######## 0206 Objetos 2 ##########
// Dot notation => Utilizamos este metodo para setar e recuperar elementos de objetos(mesmo GET e SET do java)
//objeto.propriedade
//ex

// var menu = {
//   height: 200,
//   width: 100,
//   backgroundColo: `#84e`,
// };

// var bg = menu.backgroundColo;
// bg = `#000`;

// podemos adicionar novos atributos ao objeto da seguinte forma:
// Adicionamos ao objeto menu um novo atributos chamado color e atribuimos o valor de `red`;
// menu.color = `red`;

// podemos adicionar atributos e funcoes;
// menu.esconder = function () {
//   return `menu sendo escondido!`;
// };

// let pessoa = {
//   nome: ``,
//   sobreNome: ``,
//   idade: ``,
//   peso: ``,
//   altura: ``,
// };

// Utilizando a palavra chave THIS.

// o this faz referencia ao proprio objeto.

// var altura = 200;
// var obj = {
//   altura: 20,
//   metadeAltura() {
//     return this.altura / 2;
//   },
// };

//verifica se o objeto tem uma propriedade:
// console.log(obj.hasOwnProperty(`altura`));

//EXERCICIOS
// 1) Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// let eu = {
//   nome: `Adriano`,
//   sobreNome: `Scheffer Amado`,
//   idade: 38,
//   sexo: `Masculino`,
//   possuiFaculdade: true,
//   possuiVistoEua: true,
// };

// Crie um método no objeto anterior, que mostre o seu nome completo
// let eu = {
//   nome: `Adriano`,
//   sobreNome: `Scheffer Amado`,
//   idade: 38,
//   sexo: `Masculino`,
//   possuiFaculdade: true,
//   possuiVistoEua: true,
//   mostraMeusDados() {
//     return `Dados completo ${this.nome}, ${this.sobreNome}, ${this.idade}, ${this.sexo}, ${this.possuiFaculdade}, ${this.possuiVistoEua},`;
//   },
// };

// Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };
// carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

// let cachorro = {
//   raca: `Labrador`,
//   cor: `preto`,
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa === `homem`) {
//       return `latir`;
//     } else {
//       return `nada`;
//     }
//   },
// };

//  Aula 207 Tudo é objeto.
// let nome = `Adriano`;
// console.log(`ola`);

// var menu = {
//   width: 50,
//   height: 25,
//   backgoundColor: `#098`,
//   metadeHeight() {
//     return  this.height / 2;
//   },
// };

/// --------- Exercicios ---
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoas = {
  name: `Adriano`,
  midleName: `Amado`,
  lasteName: `Scheffer`,

  showName() {
    return `Nome completo : ${this.name} ${this.midleName} ${this.lasteName}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: `labrador`,
  cor: `preto`,
  idade: 10,
  late(pessoa) {
    if (pessoa === `Homem`) {
      return ` au au au`;
    } else {
      return false;
    }
  },
};
