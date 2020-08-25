import React from "react";
import styled from "styled-components"
import Login from "./Login"
import axios from "axios"



const Container = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
margin-top: 50px;
`

const Titulo = styled.h2`
align-self:center;
`

export default class PaginaDeRegistro extends React.Component {
  state ={
    usuarios : []
  }

  acessarTodosUsuarios = () =>{
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "rene-monteiro-jackson"
        }
      }
    )
    request
    .then((resposta)=>{
      this.setState({usuarios: resposta.data.result.list})
    })
    .catch((erro)=>{
      console.log("Erro")
    })
  }
  

  render() {
    return (
      <div>
        <Container>
          
          <Titulo>Usuários Cadastrados:</Titulo>

        </Container>

      </div>

    )
    
  }
}
