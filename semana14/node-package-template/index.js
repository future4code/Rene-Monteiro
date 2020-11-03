/*
//EXERCICIOS 01
//A) OS PARAMETROS SÃO PASSADO DO ARRAY ARGUMENT VALUE (ARGV) PARA AS VARIÁVEIS, O MOMENTO DO INPUT DE DADOS É QUANDO RODAMOS O SCRIPT.

const nome = process.argv[2]
const idade = Number(process.argv[3])
const maisSete = idade + 7


console.log(`Meu nome é ${nome} e tenho ${idade} anos. Daqui a 7 anos voce terá ${maisSete} anos`)

EXERCICIOS 02
*/
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

switch(operacao){
    case "add":
        console.log(numero1 + numero2 )
				break;
		case "sub":
				console.log(numero1 - numero2 )
				break;
		case "mult":
				console.log(numero1 * numero2 )
				break;
		case "div":
				console.log(numero1 / numero2 )
				break;
		default:
				console.log("Tente novamente")

}
                    
/*
EXERCICIO 03

const listaTarefas = require("./listaTarefas")
const novaAtividade = process.argv[2]
listaTarefas.push(novaAtividade)
console.log(listaTarefas)
*/