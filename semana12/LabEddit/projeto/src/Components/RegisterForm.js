import React, {useState} from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import { GoToLoginPage }  from '../Router/GoToPages'
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
export default function RegisterForm() {
  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const history = useHistory()

  const onChangeNome=(event)=>{
    setInputNome(event.target.value)
  }
  const onChangeEmail=(event)=>{
    setInputEmail(event.target.value)
  }
  const onChangePassword=(event)=>{
    setInputPassword(event.target.value)
  }

  const signup = () =>{
    const body = {
      email: inputEmail,
      password: inputPassword,
      username: inputNome
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
    .then((response)=>{
      console.log(response)
      setInputNome('')
      setInputPassword('')
      setInputEmail('')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <div >
      <MainContainer>
        <h3>RegisterForm</h3>
      <FormContainer>
        <input value={inputNome} onChange={onChangeNome} placeholder='Nome'/>
        <input value={inputEmail} onChange={onChangeEmail} placeholder='email'/>
        <input value={inputPassword} type='password' onChange={onChangePassword} placeholder='senha'/>
        <button onClick={signup}>Cadastrar</button>
        <button onClick={()=> GoToLoginPage(history)}>Início</button>
      </FormContainer>
      </MainContainer>
    </div>
  )
}


