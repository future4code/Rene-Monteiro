/*
Lista de exercícios:

-Interpretação de Código

1. A constante meuDinhero invoca a função "ConversorDeMoeda", que recebe um parametro 
"valorEmDolar". Na variável "cotação" armazenamos a cotaçãodo Dólar com tipo numero, em 
seguida retorna um o parametro recebido "100" multiplicado pela cotação. Por fim a impressão 
da variável.


2. A variável "novoMontante" invoca a função "investeDinheiro" com os parametros "ações e 150". 
Quando a função identifica que a string recebida é igual a uma condição estabelecida ("Ações")
será multiplicado o numero recebido como parametro multiplicado por 1.1 e armazenado na 
variável valorAposInvestimento. Já na opção "tesouro direto" não será armazenado pois não atente
as condições do switch case e imprimirá "tipo de investimento incorreto".


3. São 3 impressoes em que a primeira informa o total de elementos do "array numeros", o segundo o total de um
"array1" onde são armazenados os numeros pares e o ultimo armazena os impares. O "for" faz toda divisão de
armazenamento das variáveis oriundos do arrey numeros.


4. O for utiliza os indices do array "numeros" se o elemento for menor que a variável "numero1 == infinity" o elemento 
vai sobrescrever o valor da variável "numero1". O mesmo acontece no proximo "if" porem com o comparador invertido (maior que) 
Se o numero for maior que "numero2" ele vai sobrescrever a variável.

*/
//-Lógica de programação

//1. Utilizando o for, each(), map() e filter()

let lista = [1,2,3,4,5,6,7,8,9,10]

let callback = function par(elemento, index, array) {
      if (elemento % 2 == 0){
          let numero = elemento
          return numero
      }
    
}

let numerosPares = lista.filter(callback)
console.log(numerosPares)


//2. 
//a) false
//b) false
//c) true
//d) false
//e) true

//3.

let numero = 20

let array = []

while(array.length < numero){
    
    for (let i = 0; i < numero*2; i++){
        if(i % 2 == 0){
            array.push(i)
        }


    }



}
console.log(array)



//4.

function classificaTriangulo(a, b, c){
 
    if (a == b && a == c ) {
        return `O triangulo é equilatero`
    } else if (a == b && a !== c  || b == c && b !== a || c == a && c !== b) {

        return `O triangulo é isósceles`

    }else if (a !== b && a !== c ) {

        return `o triangulo é escaleno`
    }
}


let resposta = classificaTriangulo(1,1,1)
console.log(resposta)



//5.

function exercicioCinco(a, b) {
    numeroMaior(a,b) 
    numeroDivisivel(a,b)
    diferenca(a,b)

        //i.
        function numeroMaior(a,b) {
                if (a > b){
                    console.log(`O maior é: ${a}`)
            } else {
                console.log(`O maior é: ${b}`)
                
            }    
        }  
        //ii.
        function diferenca(a,b) {
            if (a > b) {
                console.log(a-b)
            } else {
                console.log(b-a)
            }
            
        }
    
        // iii.
        function numeroDivisivel(a, b) {
            if (a % b == 0) {
                console.log( `${a} é divisivel por ${b}`)
            } else {
                console.log(`${a} NÃO é divisivel por ${b}`)
            
            } 
        
            if (b % a == 0) {
            console.log( `${b} é divisivel por ${a}`)
            
        } else  {
            console.log( `${b} NÃO é divisivel por ${a}`)
        }
    
    }


}


exercicioCinco(10,200)









