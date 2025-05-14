// ## 1)Qual o resultado da seguinte expressao?

// var total =10+5\*2/2+20;

// resultado = 35

// 2)Crie duas expressoes que retornem NaN
//const a = 1;
// const b = `ola`;
// const total = a*b;
// console.log("valor total"+ total);

// 3)Somar a String `200` com o numero 50 e retornar 250.

// const x = "200";
// const b = 50;
// const resul= +x+b;
// console.log(resul);

//4) Incremente o valor 5 e retorne seu valor incrementado;
// let x = 5;

// console.log(x);

// testando operadores !=

// let nome = "Adriano";

// if(nome !="adriano"){
//   console.log("dirente")
// }else{
//   console.log("igual");
// }

// Aula 204 2.
// utilizacao do switch

// var corFavorita = "roxo";

// switch (corFavorita) {
//   case "azul":
//     console.log("olhe para o ceu");
//     break;

//   case "amarelo":
//     console.log("Olhe para o sul");
// }

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// let myAge = 38;
// let relative = 55;

// if (myAge > relative) {
//   alert("Sou mais velho");
// } else if (myAge === relative) {
//   alert("idade igual");
// } else {
//   alert("Su mais novo");
// }

// Qual valor é retornado na seguinte expressão?
// var expressao = 5 - 2 && 5 - " " && 5 - 2;

// console.log("valor expressao " + expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = "Andre"; //Truthy
// var idade = 28; // Truthy
// var possuiDoutorado = false; // Falsy
// var empregoFuturo; // Falsy
// var dinheiroNaConta = 0; // Falsy

// console.log(
//   !!nome,
//   !!idade,
//   !!possuiDoutorado,
//   !!empregoFuturo,
//   !!dinheiroNaConta
// );

// Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;

// if (brasil < china) {
//   console.log("Brasil é mior");
// } else {
//   console.log("China é maior");
// }

// O que irá aparecer no console?
// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }
// False

// O que irá aparecer no console?
// if ("Gato" === "gato" || 5 > 2) {
//   console.log("Gato" && "Cão");
// } else {
//   console.log("Falso");
// }

//cao

// #### Aula 205 funções 1

// function areaQuadrada(area) {
//   return area * area;
// }

// console.log(areaQuadrada(2));

// function pi() {
//   return 3.14;
// }

// let total = 2 * pi();
// console.log("total de pi= " + total);

//## Diferenç entre parametro e argumeno.
//  # PARAMETRO:
// Funções recebem parametros
// ex:
// function imc(altura, peso) {
//   var imc = peso / altura ** 2;
//   return imc;
// }

//# ARGUMENTO :
// quando chamamos uma funcao, passamos os argumentos.
//ex:
// console.log(imc(81, 1.7));

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "voce gosta do ceu azul";
//   } else if (cor === "verde") {
//     return "voce gosta de mato";
//   } else {
//     return " voce nao gosta de nada";
//   }
// }
// console.log(corFavorita());

// addEventListener("click", function () {
//   console.log("oi");
// });

// ################ Aula 205 funções 2 ############
// uma funnçao sempre vai retornar um valor, mesmo quando nao a palavra chave `return`. Quando nao ha return, o valor retornado sera `undefined`.
// function imc(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(imc);
// }
// imc(80, 1.8);
// console.log(imc(80, 1.8));

// Uma funcoo pode retornar qualquer tipo de dado inclusive uma outra funcao.
// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "informe um valor numerico";
//   } else if (idade >= 60) {
//     return "idoso";
//   } else {
//     return "nao é idoso";
//   }
// }

// function faltaVisitar(visitados) {
//   var totalPaises = 193;
//   return `Faltam visitar ${totalPaises - visitados} paises`;
// }
// var profisao = ` designer`;
// function dados() {
//   var nome = `Adriano`;
//   var idade = 36;
//   var sexo = `m`;
//   function outrosDados() {
//     var cidade = `NH`;
//     var regiao = `RS`;
//     return `Dados da pessoa ${nome}, ${idade}, ${sexo}, ${cidade},${regiao}, ${profisao} sao os dados da pessoa`;
//   }
//   return outrosDados();
// }

// ################ Aula 205 funções 3 ############

// Crie uma função para verificar se um valor é Truthy

// function tru(valor) {
//   // if (valor !== 0 && valor !== `` && valor !== undefined && valor !== false) {
//   //   return `o valor ${valor} é considerado como truthy`;
//   // } else {
//   //   return `valor é Falsy`;
//   // }

//   return !!valor;
// }

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// function quadrado(lado) {
//   var perimetro = lado * lado;
//   return perimetro;
// }

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// function fullName(nome, sobrenome) {
//   return ` Nome completo: ${nome} ${sobrenome}`;
// }

// Crie uma função que verifica se um número é par
// function par(numero) {
//   if (numero % 2 === 0) {
//     return `o numero ${numero} e par`;
//   } else {
//     return `o numero ${numero} e impar`;
//   }
// }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
// function tipo(dado) {
//   return `o tipo de dado é ${typeof dado}`;
// }

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener(`scroll`, () => {
//   console.log(`Adriano`);
// });

// Corrija o erro abaixo
// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

//  ######## 0206 Objetos 1 ##########

// utilizamos o this para acessar os atributos do objeto.

// var pessoa = {
//   nome: `Adriano`,
//   idade: 25,
//   profisao: `Designer`,
//   possuiFaculdade: true,
// };

// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     // Nesta situacao sera necessario utilizar o `this`. Ele quer dizer que a variavel a ser utilizada sera a do proprio objeto, caso nao seja utilizado o `this`, ocorrera um erro de variavel inesistente.
//     // utilizamos o this para acessar os atributos do objeto.
//     return this.lados * lado;
//   },
// };

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
// };

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
// console.log(nome.length);
// console.log(nome.replace(`d`, ``));
// console.log(nome);
// console.log(nome.toUpperCase().charAt(1));

// ### toString #### => converte uma variavel em uma String. EX numero em String
// var num = 33;
// var num2 = num.toString();
// console.log(typeof num2);

// function medidas(num1, num2, num3) {
//   return `ola`;
// }
//Retorna o quantidade de parametrod da funcao.
// medidas.length;

//#### Elementos do DOM ######
// document : é um objeto
// querySelector é um método do objeto document.

//obs: dentro do querySelector vamos passar um `ARGUMENTO`.
// var botao = document.querySelector(`.btn`);
// botao.addEventListener(`click`, () => {
//   botao.classList.toggle(`verde`);
// });

// #### Exercicios ####
// nomeie 3 propriedades ou métodos de strings
// fixed, lenght, slice

// nomeie 5 propriedades ou métodos de elementos do DOM

// var btn = document.querySelector(`.btn`);
// btn.addEventListener
// btn.getAttribute
// btn.appendChild
// btn.innerHTML
// btn.id
//btn.outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// ##### 0208 Arrays e Loops 1 ######

// var games = [`psp`, `nintendo`, `nintendo 64`];
// games[0] = `ps5`;
// console.log(games[0]);

// ### METODOS E PROPRIEDADE DE UMA ARRAY ####
// games.pop(); // Remove o ultimo item do array
// games.push(`3DS`); // Adiciona ao final do array
// games.length; // Retorna o tamnho da array

// ### Utilizando Forloop

// for (let i = 0; i < games.length; i++) {
//   console.log(i);
// }

// let n = 1;
// while (n <= 10) {
//   console.log(n);
//   n++;
// }

// ###### 0208 Arrays e Loops 2 #####

//  forLoop
// var videoGames = [`psp`, `Nintendo 64`, `Super Nitendo`, `psp 5`];

// for (let i = 0; i < videoGames.length; i++) {
//   // console.log(videoGames[i]);
//   if (videoGames[i] === `psp 5`) {
//     // console.log(`achou ${videoGames[i]}`);
//     break;
//   }
// }

// forEach
// let videoGame = [`PSP 3000`, `Nitendo 64`, `PS1`, `Mega Drive`];

// o forEach pode recebe tres parametros:
// o item
// o index
// e o nome do array
// videoGame.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// ### Exercicios
// 1) Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// let anoCopa = [`1959`, `1962`, `1970`, `1994`, `2002`];

// 2) Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// anoCopa.forEach(function (ano) {
//   console.log(`O brasil ganhou a copa de ${ano}`);
// });

// 3) Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// for (let index = 0; index < frutas.length; index++) {
//   if (frutas[index] === `Pera`) {
//     break;
//   } else {
//     console.log(frutas[index]);
//   }
// }

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// let ultimaFruta = frutas[frutas.length - 1];

//#### 0209 Atribuição e Ternário

// var idade = 19;
// var podeBeber = idade >= 19 ? `Pode beber` : `Nao pode beber`;
// console.log(podeBeber);

// obs: conficionais if com no maximo uma linha, nao precisa de chaves

//Exercício
// 1) Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
// var scroll = 1000;
// scroll += 500;
// console.log(scroll);

// 2) Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito;

// 1) forma
// darCredito = possuiCarro && possuiCasa ? true : false;
// console.log(darCredito);

// 2) forma
// darCredito = possuiCarro && possuiCasa;
// console.log(darCredito);

// #### 0210 Escopo #####
// Variaveis declaradas com `var` vazam o bloco.
// Variaveis declaradas com `const` e `let` respeitam o escopo do bloco

// var nao respeita ao escopo de blco
// {
//   var nome = `Adriano`;
// }
// console.log(nome);

// let, respeita o escopo de blooo
// {
//   let sobreName = `Amado`;

// }
// console.log(sobreName);

// Qual a difernca entre `const` e `let`?
// variaveis const sao impedidas de serem redeclaradas ex:
// const mes = `janeiro`;
// mes = `marco`; // uma vez criada a variavel nao pode ser redeclarda.
// console.log(mes); // erro

//#### EXERCICIOS #######

// 1) Podemos alterar os atributos de um objeto constante.

// const data = {
//   dia: 23,
//   mes: `Janeiro`,
// };

//podemos aletar os atributos de um objeto declado const.
// data.dia = 24;
// console.log(data.dia, data.mes);

//Nao podemos alterar o tipo do objeto declado como const
data = `pera`;

// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);
// var é uma palavra reservada e nao um atributo
// as variaveis `marca` e `portas`, estao sendo chamadas pelo console.log fora do escopo

// Como corrigir o erro abaixo?
// const dois = 2;
// function somarDois(x) {
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

// O que fazer para total retornar 500?
// var numero = 50;

// for (var numero = 0; numero <= 10; numero++) {
//   console.log(numero * 50);
// }

// const total = 10 * numero;
// console.log(total);

// ######## 0301 O Que é o Dom 1 -> DOM é a representacao da pagina web

// Document object Model (DOM ) -> interface representada por todo o documento html ou xml
// o objeto
// window = Objeto global do browser (window => envolve todo o DOM)
// Window: Construtor do objeto window.
// window: O proprio objeto DOM
// WINDOWS E DOM => sao os objetos principais do DOM

//# Diferenca entre innerText e innerHtml
// innerText : Retorna apenas oque esta dentro do elemento.
//innerHtml : Retorna o elemento html junto com o que esta dentro dele.

// let h1Selecionado = document.querySelector("h1");
// alert(h1Selecionado.innerHTML);

// ### Exercicios
// 1) Retorne o url da página atual utilizando o objeto window

const urlsite = window.location.href;
// alert(urlsite);

// 1) Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativa = document.querySelector(`.ativo`);

// Retorne a linguagem do navegador
const navegador = window.navigator.language;
// alert(navegador);

//en-GB
// Retorne a largura da janela
const largura = window.innerWidth;
// alert(largura);
