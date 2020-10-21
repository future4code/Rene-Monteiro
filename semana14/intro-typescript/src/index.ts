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

type Estatistica = {
    maior:number,
    menor:number,
    media:number
}
type Numeros = number[]



function obterEstatisticas(numeros: number[]) : Estatistica {
    
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
        
        let soma = 0
        
        for (let num of numeros) {
            soma += num
        }
        
        const estatisticas : Estatistica = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        
        return estatisticas
}
    
    
const amostraDeIdades : Numeros = [10,50,5,20,30,40]



console.log(obterEstatisticas(amostraDeIdades))

EXERCICIO 03
*/
  
   
type post = 
    {
        autor: string,
        texto:string
    }


const posts : post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

console.table(posts)