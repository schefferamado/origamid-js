######## 0301 O Que é o Dom 1 -> DOM é a representacao da pagina web

o DOM e tudo que venos atraves do navegador.
Document object Model (DOM ) -> interface representada por todo o documento html ou xml
o objeto
window = Objeto global do browser (window => envolve todo o DOM). O proprio objeto DOM
Window: Construtor do objeto window.
WINDOWS E DOM => sao os objetos principais do DOM

1. Quando usar document (Instância — minúsculo)
   Use em 90% dos casos de manipulação web. É a variável pronta fornecida pelo navegador para interagir com os elementos HTML da página atual.

Buscar elementos: document.querySelector('.btn'), document.getElementById('app')

Criar ou alterar HTML: document.createElement('div'), document.title = "Nova Página"

Ouvir eventos da página: document.addEventListener('DOMContentLoaded', callback)

2. Quando usar window (Instância — minúsculo)
   Use quando precisar interagir com o navegador em si, com a aba ou com recursos globais da janela (fora do corpo do HTML).

Dimensões do navegador/Viewport: window.innerWidth, window.innerHeight

Navegação e URL: window.location.href, window.history.back()

Diálogos e Timers: window.alert(), window.setTimeout(), window.localStorage

Eventos globais da janela: window.addEventListener('resize', ...) ou window.addEventListener('scroll', ...)

3. Quando usar Document e Window (Interfaces / Classes — Maiúsculo)
   Você raramente usará as versões com maiúscula para executar ações. Elas são usadas como tipos para verificação de código, testes ou desenvolvimento com TypeScript e POO (Programação Orientada a Objetos).

A. Checagem de tipo em execução (JavaScript puro):
JavaScript
// Verificar se um objeto recebido por parâmetro é realmente um documento
function processarPagina(doc) {
if (doc instanceof Document) {
console.log("Objeto válido!");
}
}

// Verificar se a janela global existe (ex: SSR / Node.js vs Navegador)
if (typeof Window !== 'undefined') {
// Código que roda apenas no ambiente do navegador
}
B. Tipagem em TypeScript:
TypeScript
// Especificar o tipo de um parâmetro de função
function configurarEventos(janela: Window, doc: Document) {
// ...
}
C. Extensão de protótipos (Avançado):
JavaScript
// Adicionar um método personalizado a TODOS os documentos
Document.prototype.buscarRapido = function(seletor) {
return this.querySelector(seletor);
};
Guia Rápido de Decisão
Vai mexer no HTML / DOM? → Use document

Vai mexer na Aba / Navegador / LocalStorage / URL? → Use window

Está tipando (TypeScript) ou validando classe (instanceof)? → Use Document ou Window
