import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class DeletarPlay extends React.Component{

    DeletarPlay = () => {
        axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/e8b1518a-658e-4f61-9c74-4a62279c7617",
        {headers: {
            Authorization: "rene-monteiro-jackson"
        }})
        .then((resposta)=>{
            console.log(resposta)
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
    render(){
        return(
            <div>
                <h2>Deletar Playlists</h2>
                <button onClick={this.DeletarPlay}>Deletar</button>

            </div>
        )
    }
}
