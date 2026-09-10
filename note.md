--- window : é o objeto globla do browser. Tudo parte dele.

Node

- Toda tag HTML é representada pelo objeto `Element` e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

- element : é um tipo de objeto node.

Element.classList no caso é algumElemento.classList.add(`.classe`);

pesquisar a diferença entre 'dataset' e getAttribute.(https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes)

- Pesquisar objetos do 'element' e 'HTMLElement'.
- PROPRIEDADES terminan com ponto e virgula;
- METODOS: termina com parenteses;

- #### coisa para estudar

  -tooltips em js -> um recurso visual que ao mover o mouse em cima de um objeto ele, mostra uma janelinha.

- Podemos tentar converter uma string em um numero, para isso basta adicionar o sinal de + na frete da string, se nao conseguir converter vai retornar um NaN.

ex:
var frase = `isso e um teste`
+frase; //NaN
-frase; //NaN

add esta linha

==== Element====
Construtor de element.

==== element ====
Qualquer tag dentro do documento(DOM).

Node --> Element --> HTMLElement --> HTMLButtonElement / HTMLInputElement / ...

Neste caso o 'element' sera o oque selecionamos, 'paragrafo.
paragrafo.classList.add('red');

==== node ======
Qulquer caracter, inclusive espaços em branco.

=== Document ===
Construtor de document.

=== document ===
todo o documento HMTL da página.

=== Window ====
O objeto window em JavaScript é o objeto global do ambiente do navegador. Ele representa a janela do navegador que contém a página web.

==== window ====
Em termos simples: tudo o que o JavaScript faz no navegador acontece "dentro" do objeto window.

Dá Acesso às APIs do NavegadorO window expõe ferramentas essenciais fornecidas pelo navegador para você interagir com a aba, com o histórico ou com a tela.
Métodos famosos que você usa direto no código vêm dele:
window.alert() (ou apenas alert())
window.setTimeout()
window.localStoragewindow.location (para redirecionar páginas)Como ele é global, você não precisa digitar window. antes deles.
Chamar alert() e window.alert() é exatamente a mesma coisa.

Ele Contém o DOM (Document)É através do window que o JavaScript consegue acessar a página HTML.

O objeto document (que você usa para buscar elementos) mora dentro do window.
