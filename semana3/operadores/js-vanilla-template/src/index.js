/* Atividade 1 (interpretação)

a. false
b. false
c. true
d. boolean


Atividade 2 (interpretação)

a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

*/


//Atividade 1 (Escrita)

let idade = prompt("Qual sua idade? ")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo? ")
let pergunta = prompt("Sua idade é maior do que a do seu amigo? True")
let diferenca = Number(idade) - Number(idadeAmigo)
console.log('A diferenca é: ',diferenca)

//Atividade 2 (Escrita)

let num = prompt("Digite um numero par: ")
let divisao = Number(num) % 2
console.log(divisao) //para numeros pares sempre o resto sera 0 e numeros impares sera 1

//Atividade 3 (Escrita)


let listaDeTarefas =[]

listaDeTarefas[0] = prompt("Qual seu nome? ")
listaDeTarefas[1] = prompt("Qual sua idade? ")
listaDeTarefas[2] = prompt("Qual sua cor favorita? ")

console.log(listaDeTarefas)

let n = prompt("Digite um numero de 0 a 2")
listaDeTarefas.splice(n,1)
console.log(listaDeTarefas)



//Atividade 4 (Escrita)


let nome = prompt("Qual seu nome? ")
let email = prompt("Qual seu e-mail")

console.log("O email ",email," foi cadastrado com sucesso. Seja bem-vindo(a), ",nome,"!")



