//===== EXERCICIOS =====
// 1) Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const destinoMenu = document.querySelector(".copy");
const menuClonado = menu.cloneNode(true);
destinoMenu.appendChild(menuClonado);

// 2) Selecione o primeiro DT da Dl de faq

const faq = document.querySelector(".faq");
const a = faq.querySelector("dt");
a.remove();

// 4) Selecione o primeiro DD referente ao primeiro DT
const dt = document.querySelector("dt");
const dd = dt.previousElementSibling;
console.log(dd);
dd.remove();

//  substitua o conteúdo de html de .faq pelo de .animais.

const faq1 = document.querySelector(".faq");

const animais = document.querySelector(".animais");

faq.appendChild(animais);
animais.appendChild(faq);
