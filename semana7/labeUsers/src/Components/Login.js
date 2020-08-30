import React from "react";
import styled from "styled-components";
import axios from "axios";
import PaginaDeRegistro from "./PaginaDeRegistro.js"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;
const Input = styled.input`
  align-self: center;
`;
const Button = styled.button`
  align-self: center;
  margin-bottom: 20px;
`;

export default class Login extends React.Component {
  state = {
    inputName:"",
    inputEmail:""
  }


  onChangeName = (event) =>{
    this.setState({inputName: event.target.value})

  }
  onChangeEmail = (event) =>{
    this.setState({inputEmail: event.target.value}) 
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "rene-monteiro-jackson"
      }
    })
    .then( resposta => {
      console.log(resposta)
      this.setState({inputName: "", inputEmail: ""})
    }).catch( erro => {
      console.log(erro.message)
    })
  
  }

  render() {
    return (
      <div>
        <Container>
          <Input
            value={this.state.inputName}
            onChange={this.onChangeName}
            type="text"
            placeholder="nome"
          />
          <br />
          <Input
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}  
            type='email'
            placeholder="E-mail"
          />
          <br />
          <Button onClick={this.createUser} >Salvar</Button>
        </Container>
      </div>
    );
  }
}
