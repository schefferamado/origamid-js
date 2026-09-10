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
function initAccordion() {
  const accordionList = document.querySelectorAll(`.js-accordion dt`);

  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// ======= 0311 Scroll Suave Link Interno =======

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"] ');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start", // Alinhe o bloco ao inicio
    });

    // Forma Alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// =========0312 Animação ao Scroll=========

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  //se as seções existirem execute o codigo abaixo
  if (sections.length) {
    //calcula a metade da tela.
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
          //neste else vamos remover a animação quando subirmos a página
        } else {
          section.classList.remove("ativo");
        }
      });
    }
  }
  //precisamos chamar a função para carregar a primeira seção quando o site for carregado, caso contrário, não vai carregar
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();
