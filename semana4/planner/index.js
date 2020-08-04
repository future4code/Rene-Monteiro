

let atividade
let dia



function novaTarefa (){

    

    atividade = document.getElementById("tarefa")
    dia = document.getElementById("dias-semana").value

    if ( dia === "domingo") {
        domingo.innerHTML += `<p>${atividade.value} </p>`
        tarefa.value = ''
      
        
    }else if (dia === "segunda"){
        segunda.innerHTML += `<p>${atividade.value} </p>`
        tarefa.value = ''

    } else if (dia === "terca") {
        terca.innerHTML += `<p>${atividade.value}</p>`
        tarefa.value = ''

    }else if (dia === "quarta"){
        quarta.innerHTML += `<p>${atividade.value}</p>`
        tarefa.value = ''
    }else if (dia === "quinta") {
    quinta.innerHTML += `<p>${atividade.value}</p>`
        tarefa.value = ''
    }else if (dia === 'sexta') {
        sexta.innerHTML += `<p> ${atividade.value}</p>`
        tarefa.value = ''
    }else if (dia ==="sabado"){
        sabado.innerHTML += `<p> ${atividade.value} </p>`
        tarefa.value = ''
    }
    if (atividade == '') {
        return alert("Informe o valor antes de tentar criar a tarefa")
    }
}


