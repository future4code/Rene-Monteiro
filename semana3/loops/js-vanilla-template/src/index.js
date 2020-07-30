/*
Atividade 1 (Interpretação)

Foi atribuido um valor 0 para a variável "valor". Na estrutura "for", existe um contador "i" que enquanto
ele for menor que 5 "valor" será incrementado/somado o valor do contador ao valor da variável.

Atividade 2 (Interpretação)

a) Temos uma lista , em seguida um "for" com a condição de imprimir o numero da lista se o mesmo for maior que 18.

b) Sim. Poderiamos usar uma estrutura while ou retirar a condição if mantendo apenas s linha "console.log(numero)".
todos os numeros serão impressos.

Atividade 3 (Escrita)

*/

let arrayOriginal = [3,20,51,47,50,60,25,80,90]
//a
for (let numero of arrayOriginal) {
    console.log(numero)
}

//b
for (let numero of arrayOriginal) {
     console.log(numero/10)
   
}

//c
let arrayPar = []
for (let numero of arrayOriginal){
    if (numero % 2 == 0) {
        arrayPar.push(numero)
        
    }
    
}

console.log(arrayPar)

//d 
for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(`O elemento do index ${i} é ${arrayOriginal[i]}`)
}

//e

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
for (numero of arrayOriginal) {
    if (numero > maior) {
        maior = numero
    }
    if (numero < menor) {
        menor = numero
    }
}
console.log(`O maior é ${maior} e o menor é ${menor}.`)