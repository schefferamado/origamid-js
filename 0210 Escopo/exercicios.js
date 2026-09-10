/// Exercicios:

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(cor, marca, portas);
//R: pq as variaveis marca e let, estao sendo declaradas dentro de um escopo de bloco e sendo acessadas fora do escopo.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

// se numero dentro do for for declarada com var, a variavel vai vazer, e sobescrever o valor atribuido anteriormente.
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
