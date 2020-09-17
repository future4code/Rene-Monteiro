import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoTohome } from '../Router/GoToPages';
import {BrowserRouter, Switch, Route} from "react-router-dom"




function LoginPage() {
  const [email, setEmail]= useState('')
  const [pass, setPass] = useState('')

  const history = useHistory()

  useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token){
      history.push('/listarviagens')
    } else{
      history.push('/paginalogin')
    }
    

  },[history])

  const inputEmail = (event)=>{
    setEmail(event.target.value)
  }

  const inputPass = (event)=>{
    setPass(event.target.value)
  }

  const FazerLogin =()=>{
    const body = {
      email: email,
      password: pass
    }
    const headers = {
      Authorization: {
        "Content-Type" : "application/json"
      }
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rene-jackson/login", body)
    .then(resposta=>{
      window.localStorage.setItem("token",resposta.data.token)
      console.log(resposta)
      history.push("/listarviagens")

    })
    .catch(erro=>{
      console.log(erro)
    })
  }

  
  return (
    <div>
      <p>LoginPage</p>
      <input value={email} placeholder='e-mail' onChange={inputEmail}/>
      <input value={pass} placeholder='senha' onChange={inputPass}/>
      <button onClick={FazerLogin}>Fazer Login</button>
      <p>ir para a Home</p>
      <button onClick={()=>{GoTohome(history)}}>Home</button>
    </div>
  );
}

export default LoginPage;
