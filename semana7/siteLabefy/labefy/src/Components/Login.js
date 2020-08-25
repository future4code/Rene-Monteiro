import React from "react";
import styled from "styled-components"

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
margin-top: 100px;

`
const Input = styled.input`
align-self:center;
`
const Button = styled.button`
align-self:center;
margin-bottom: 20px;
`
export default class Login extends React.Component {
  state = {
      inputNome: "",
      inputEmail: '',
  }

  
  render() {
    return (
      <div>
       <Container>
          
          <Input type='text'placeholder='nome'/><br/>
          <Input type='email' placeholder='E-mail'/><br/>
          <Button>Salvar</Button>
          
       </Container>
      </div>
    )
  
  }
}
