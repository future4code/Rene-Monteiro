import React from "react"
import axios from "axios"
import styled from "styled-components"

const Titulo = styled.h2`

`
export default class DeletarPlay extends React.Component{

    DeletarPlay = () => {
        axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/63fadd50-1934-4b98-88c8-4770e8f97c3e",
        {headers: {
            Authorization: "rene-monteiro-jackson"
        }})
        .then((resposta)=>{
            
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
    render(){
        return(
            <div>
                <Titulo>Deletar Playlists</Titulo>
                <button onClick={this.DeletarPlay}>Deletar</button>

            </div>
        )
    }
}
