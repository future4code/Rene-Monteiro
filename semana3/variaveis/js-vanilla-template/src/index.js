/*
Atividade 1 (interpretação)
a = 10 
b = 10 
console.log(b) // b tem o valor de 10.
 
b = 5
console.log(b) // b o valor 10 foi sobrescrito pelo valor 5.

Atividade 2 (interpretação)
a = 10
b = 20
c = a
b = c
a = b
console.log(a,b,c)  // a == 10, b == 10, c == 10.
*/



//Atividade 1 (Escrita)

let nome 
let idade
console.log(typeof(nome ,idade)) // Como os valores não foram definidos retornam como UNDEFINED.

nome = prompt("Qual seu nome? ") // o comando prompt faz com que abra uma caixa de penguntas, semelhante a função Alert
idade = prompt("Qual sua idade? ")

console.log('Olá ', nome,'voce tem ',idade,'anos.')

//Atividade 2 (Escrita)

let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")
let cidade = prompt("Qual o nome da sua cidade? ")
let rua = prompt("Qual o nome da sua rua? ") 
let num = prompt("Qual o numero da sua casa? ")

console.log('Qual seu nome? Resposta:',nome)
console.log('Qual sua idade? Resposta:',idade)
console.log('Qual sua cidade? Resposta:',cidade)
console.log('Qual sua rua? Resposta:',rua)
console.log('Qual o numero da sua casa? Resposta:',num)


//Atividade 3 (Escrita)


const comidas = ["pizza", "coxinha","hamburguer", "sushi", "pastel"]

console.log(comidas) //3 a
console.log('Essas são minhas comidas preferias: ') //3 b
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comidas[1]= prompt("Qual é sua comida preferida? ")
console.log(comidas)

//Atividade 4 (Escrita)

let perguntas = ["Voce é brasileiro? ", "Gosta de animais? ", "É maior de idade? "]

let respostas = [true, true, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])







