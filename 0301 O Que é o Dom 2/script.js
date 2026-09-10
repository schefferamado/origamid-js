/// Aula 301 -2

//# Diferenca entre innerText e innerHtml
// innerText : Retorna apenas oque esta dentro do elemento.
//innerHtml : Retorna o elemento html junto com o que esta dentro dele.

// let h1Selecionado = document.querySelector("h1");
// alert(h1Selecionado.innerHTML);

// ### Exercicios
// 1) Retorne o url da página atual utilizando o objeto window

// const urlsite = window.location.href;
// // alert(urlsite);

// // 1) Seleciona o primeiro elemento da página que
// // possua a classe ativo
// const ativa = document.querySelector(`.ativo`);

// // Retorne a linguagem do navegador
// const navegador = window.navigator.language;
// // alert(navegador);

// //en-GB
// // Retorne a largura da janela
// const largura = window.innerWidth;
// // alert(largura);

/// Exercicios
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const ativo = document.querySelector(`.ativo`);

// Retorne a linguagem do navegador
const lan = window.navigator.language;
console.log(lan);

// Retorne a largura da janela
const winSize = window.innerWidth;
console.log(winSize);
const a = docu;
