/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de BlackJack")

let jogador1 = "Usuário"
let jogador2 = "Computador"

let j1 = []
j1.push(comprarCarta(), comprarCarta())

 
 
let j2 = []
j2.push(comprarCarta(), comprarCarta())

let somaU = j1[0].valor + j1[1].valor
let somaC = j2[0].valor + j2[1].valor

if (confirm("Para jogar digite 'OK' para sair digite 'CANCELAR'")) {
   console.log(`${jogador1} - cartas ${j1[0].texto} ${j1[1].texto} - pontuação ${somaU}`)
   console.log(`${jogador2} - cartas ${j2[0].texto} ${j2[1].texto} - pontuação ${somaC}`)
   if (somaU > somaC) {
      console.log(`O ${jogador1}, venceu`)
   } else if (somaC > somaU) {
      console.log(`O ${jogador2}, venceu`)
   } else {
      console.log("Empate!")
   }
   
} else {
   console.log("O jogo acabou")
}


