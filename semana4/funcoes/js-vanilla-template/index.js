/*
Atividade 1  (Interpretação)


a) Duas impressões multiplicando por 5 os parametros recebidos. 
Resposta 10 e 50 respectivamente.

b) os valores nao seriam impressos.

Atividade 2 (Interpretação)

a) Serão impressos os itens da lista arrayDeNomes até o indice 1.

b) Toda a lista. ["Amanda", "Caio"]


Atividade 3 (Interpretação)
a) Serão adcionados ao arrayFinal os numeros pares do array multiplicados por ele mesmo.
Poderiamos chamar o arrayFinal de NumerosPares.


Atividade 4 (Escrita)

a)
function saudacao(){
    console.log("Eu sou René, tenho 32 anos, moro em Moreno-PE e sou estudante na labenu.")
}

saudacao()


b)
function saudacao(nome, idade, cidade, profissao){
    if (profissao == true) {

        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante na Labenu`)
    }else {
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante`)

    }
}

saudacao("René", 32, "Moreno-PE", true)

*/
//Atividade 5 (Escrita)
//a)
function soma(a, b) {
    let somar = a + b
    console.log(somar)
}

soma(10,20)




//b)
function maior(a,b) {
    if (a >= b) {
        return true
    } else {
        return false
    }
}

console.log(maior(10,10))




//c)
function mensagem(texto) {
    for (let i = 0; i < 10; i++){
        console.log(i+1, texto)
    }

}
mensagem("oi")


//Atividade 6 (Escrita)
//a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function tamanhoArray (array) {
   return array.length
}


console.log(tamanhoArray(array))




//b)
function parOuImpar (a) {
    if (a %2 == 0) {
        return true
    }else {
        return false
    }
}

console.log(parOuImpar(2))



//c)
function listaPar(array){
    let numerosPares = []
    for (x of array) {
        if (x % 2 == 0) {
            numerosPares.push(x)
        }
    }
    return numerosPares
}


console.log(listaPar(array))

//d) Já foi escrita diretamente na letra C.










