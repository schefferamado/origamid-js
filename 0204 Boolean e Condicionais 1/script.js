var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log(`Verdadeiro`);
} else {
  console.log(`falso`);
}

//------------------------- Truthy e Falsy ---------

/* Valores falsy:
if(false)
if(0)
 if(NaN)
 if(null)
 if(undefined)
 if(``) //String vazia

 * tudo o restante e Truthy


 */
//----------Operadores Logicos de Negacao---------------
/*
if (!true)
  if (!1)
    //false
    if (!``)
      //false
      if (!undefined)
        //true
        if (!!` `)
          //true
          if (!!``); //false

/*
// ----------- Operadores de comparacao ----------

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true



        
// Podemos verificar se a variavel e um valor thrufy oy falsy negando a varivavel duas vezes da seguinte forma:
// !!null

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

let nome = "Adriano";

if (nome != "adriano") {
  console.log("dirente");
} else {
  console.log("igual");
}
