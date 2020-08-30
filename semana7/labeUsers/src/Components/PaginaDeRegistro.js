import React from "react";
import styled from "styled-components";
import Login from "./Login";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Titulo = styled.h2`
  align-self: center;
`;

const P = styled.p`
  align-self: center;
`;


export default class PaginaDeRegistro extends React.Component {
  state = {
    users: []
  }
  componentDidMount = () => {
    this.getAllUsers()
  }
  getAllUsers = () =>{
   
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers:{
        Authorization: "rene-monteiro-jackson"
      }
    }).then(response =>{
      this.setState({users: response.data})
    }).catch(error =>{
      console.log(error.message)
    })
  }
  render() {
    return (
      <div>
        <Container>
          <Titulo>Usuários Cadastrados:</Titulo>
          {this.state.users.map((user) => {
            return(
              <P key={user.id}>
                {user.name}
              </P>
            )
          })}
        </Container>

      </div>
    );
  }
}
