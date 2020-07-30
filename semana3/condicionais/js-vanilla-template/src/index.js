/* 
Atividade 1 (Interpretação)

O codigo recebe um valor digitado pelo cliente, em seguida armazana na variável numero o dado convertido em numero. A condicional
se baseia no numero dividido por 2 com RESTO igual (valor e tipo) a zero para imprimir "Passou no teste", se não, retornará
"nao passou no teste".

Atividade 2 (Interpretação)

a) O codigo confirma o valor da fruta escolhida.
b) "O preço da fruta, maçã, é R$ 2.25".
c) a variável preço ira receber o valor de 5.5, mas em seguida será sobrescrita por 5.

Atividade 3 (Interpretação)

a) Recebe uma constante numero do tipo numero digitada pelo usuário
b)"Esse numero passou no teste", porem  a variável mensagem de escopo local nao compartilhará a informação com o global. Se fosse 
digitado -10 seria, o programa nem reconheceria a variável mensagem.
*/


//Atividade 4 (Escrita)
let idade = Number(prompt("Qual sua idade? "))

if (idade >= 18) {
    console.log("Você pode dirigir")

} else if (idade < 18) {
    console.log("Você não pode dirigir")
}


//Atividade 5 (Escrita)
let turno = prompt("Em qual turno você estuda? (M)Matutino, (V) Vespertino, (N)Noturno.")
if (turno == "M") {
    console.log("Bom dia!")
}
else if (turno == "V") {
    console.log("Boa tarde!")
}
else if (turno == "N") {
    console.log("Boa noite!")
} 

//Atividade 6 (Escrita)
let turno = prompt("Em qual turno você estuda? (M)Matutino, (V) Vespertino, (N)Noturno.")
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não encontrado!")
    
}

//Atividade 7 (Escrita)
let filme = prompt("Qual o genero do filme? ")

if (filme == "fantasia") {
    let preco  = Number(prompt("Qual o preco do ingresso? "))
    if (preco < 15) {
        console.log("Bom filme!")
    } else{
        console.log("Escolha outro filme")
    }
} else {
    console.log("Escolha outro filme")
}








