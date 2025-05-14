<!-- Aula 202 -->

### variavéis

Sempre que declararmos uma variável e não atibuimos um valor a ela, por padrão o valor será 'undefined'.

## Expressoes que sempre dao false

- if(false)
- if(0) // ou -0
- if(NaN)
- if(null)
- if(undefined)
- if('') // ou "" ou ``

## Expressoes que sempre dao true

- if(true)
- if(" ")
- if(-1)
- if({})

### verificando uma vari avel se e verdadeira ou false da seguinte forma

console.log(!!variavel);

## Operadores de comparacao (Recomendado sempre utilizar a verificaçao estritamente `===` );

var nome = "Adriano";
if(nome == "Adriano") // => retorna true;
if(nome ==="adriano") //=> retorna false

## Operador de negacao

# Podemos utilizar `!=` ou utilizar `!==`, este ultimi seria o restritamente
