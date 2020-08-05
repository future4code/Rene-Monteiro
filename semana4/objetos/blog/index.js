
let dadosPessoas = {

    titulo: 'Titulo',
    autor: "Autor",
    conteudo: "Conteudo"

}

function coletaDados () {

    let meuTitulo = document.getElementById("titulo-post")
    let meuAutor = document.getElementById('autor-post')
    let meuConteudo = document.getElementById("conteudo-post")
    


    if (meuTitulo !== '' && meuAutor !== '' && meuConteudo !== '' ) {

        dadosPessoas.titulo = meuTitulo.value
        meuTitulo.value = ''


        dadosPessoas.autor = meuAutor.value
        meuAutor.value = ''

        dadosPessoas.conteudo = meuConteudo.value
        meuConteudo.value = ''
    } 
    
}
let valor = dadosPessoas.titulo
function publicacao (){

    container-de-posts.innerHTML = `<div> ${valor}</div>`
} 
