/*
Exercicio 01
A) const minhaString: string = 5 //ACEITA APENAS STRING

B) const meuNumero: (number|string) = 5 

C)D)E)


enum corArco  {
    AMARELO = "Amarelo",
    VERDE = "Verde",
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita:corArco
}

const usuario1 : pessoa = {
    nome: "Joao",
    idade: 60,
    corFavorita:corArco.AMARELO
}

const usuario2: pessoa ={
    nome: "Maria",
    idade: 52,
    corFavorita:corArco.AMARELO
}

const usuario3 : pessoa = {
    nome: "Jose",
    idade: 55,
    corFavorita:corArco.AMARELO
}

const usuarios : pessoa[] = [usuario1,usuario2,usuario3]

EXERCICIO 02
*/

type Ordenacao = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number): Ordenacao {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : Ordenacao = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


