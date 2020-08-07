// lista de id

let listaId = ["valor", "tipo", "descricao"]

let valores = []

let novaLista = []

function capturarDados () {
    
    
    // armazenar id na variavel
    
    for (let i = 0 ; i < listaId.length  ; i ++){
        
        valores[i] = document.getElementById(listaId[i])  

    }

    
    if (valores[0].value !== '' && valores[1].value !== '' && valores[2].value !== ''){
        // armazenar variavel no objeto
        
        let despesa = { }
        despesa.valor = Number(valores[0].value)
        despesa.tipo = valores[1].value
        despesa.descricao = valores[2].value
    
        novaLista.push(despesa)
        
        
    } else {
        alert("preencha todos os campos")
    }

        
    // limpar variavel
    for (let i = 0; i< valores.length ; i ++){
        valores[i].value = ''
    }
    //inserirDespesas()
    console.log(novaLista)
    
    
}



function filtro () {
    let escolha = document.getElementById("tipo-despesas")
    let extrato = document.getElementById("extrato")

    
    function callback(elementoDoArray, index, array) {
         
        if (escolha.value === "Casa") {

            extrato.innerHTML += `<p>${elementoDoArray.valor}</p>`

        } else if (escolha.value === 'Viagem'){

            extrato.innerHTML = `<p>${elementoDoArray.valor}</p>`

        } else if (escolha.value === "Outros") {
            
            extrato.innerHTML = `<p>${elementoDoArray.valor}</p>`
        }
        

        
    }
    
    let respFiltro = novaLista.map(callback)

    console.log(respFiltro)
    
    


}












/*
    
function inserirDespesas() {
    let extrato = document.getElementById("extrato")
    extrato.innerHTML = ''
    for (let x of novaLista) {
        extrato.innerHTML += publi(x)
    }
  

}


function publi(novaLista) {
    return `<h2> -Lançamento </h2> <p> ${novaLista.valor}</p> 
    <p> ${novaLista.tipo}</p> 
    <p> ${novaLista.descricao}</p> <hr> `

}*/


