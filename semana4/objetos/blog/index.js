
// lista de id

let listaId = ["titulo-post", "autor-post", "conteudo-post"]

let valores = []

function dados () {
    
    let assunto = { }
    
    // armazenar id na variavel

    for (let i = 0 ; i < listaId.length  ; i ++){
        
        valores[i] = document.getElementById(listaId[i])    
    }

    // armazenar variavel no objeto

    assunto.titulo = valores[0].value
    assunto.autor = valores[1].value
    assunto.conteudo = valores[2].value
    
    // limpar variavel
    
    valores[0].value = ''
    valores[1].value = ''
    valores[2].value = ''

    
   let container = document.getElementById("container-de-posts")
   
   //container.innerHTML = ` <p>${assunto.titulo} ${assunto.autor} ${assunto.conteudo}</p>`
   container.innerHTML += ` <p>${assunto.titulo} </p>`
   container.innerHTML += ` <p>${assunto.autor}</p>`
   container.innerHTML += ` <p>${assunto.conteudo}</p>`


   
    
    
    
    
    
    
    
    
    
}





