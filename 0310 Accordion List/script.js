function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // este if com a verificação dos atributos com (length) vai verificar se as classes selecionadas no código acima existem, caso o nome das classes seja modificado, o código não vai ser executado.
  if (tabContent.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
// ===== FAQ ====
const faq = document.querySelectorAll(".faq-lista dt");
function mostraFaq(index) {
  let itemFaq = faq[index].nextElementSibling;
  itemFaq.classList.toggle("exibe");
}

faq.forEach((item, index) => {
  item.addEventListener("click", () => {
    mostraFaq(index);
  });
});
