import React, {useState} from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import { GoToRegisterPage } from "../Router/GoToPages"
import axios from 'axios'


const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const FormContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`
export default function LoginForm() {
 const [inputEmail, setInputEmail] = useState('')
 const [inputSenha, setInputSenha] = useState('')
  const history = useHistory()

  const onChangeEmail = (event)=>{
    setInputEmail(event.target.value)
  }

  const onChangeSenha = (event)=>{
    setInputSenha(event.target.value)
  }
  const login =()=>{
    const body = {
      email: inputEmail,
      password: inputSenha
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }



  return (
      <MainContainer>
        <h2>Formulario de Login</h2>
      <FormContainer>
        <input value={inputEmail} onChange={onChangeEmail} placeholder='email'/>
        <input type='password' value={inputSenha} onChange={onChangeSenha} placeholder='senha'/>
        <button onClick={login}>Entrar</button>
        <button onClick={()=> GoToRegisterPage(history)}>Cadastrar</button>
      </FormContainer>
      </MainContainer>
    
  )
}


