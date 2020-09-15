import React, {useState} from 'react';
import styled from "styled-components"
import axios from "axios"
import Card from "./Componentes/Card.js"
import Macth from "./Componentes/Match.js"

const Container = styled.div`
display:flex;
flex-direction: column;
`
const Button = styled.button`
position: fixed;
top: 95vh;
left: 90vw;
`

function App() {
  const [pagina, setPagina]= useState(0)

  const clearList = () =>{
    const headers = {
      headers:{
        "Content-Type": "application/json"
      }
    }
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rene/clear",headers)
    .then(response =>{
      
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
  const mudarPagina = () =>{
    if (pagina === 0){
      setPagina(1)
    } else{
      setPagina(0)
    }
  }
  const paginaDois =()=>{
    setPagina(1)
  }

  const paginaAtual = () =>{
    switch (pagina){
      case 0:
      return <Card
      mudarPagina = {mudarPagina}
      />
      case 1: 
      return <Macth
      mudarPagina = {mudarPagina}
      />
    }
  }
  
  return (
    <Container>
      {paginaAtual()}
      <Button onClick={clearList}>Limpar Macthes</Button>
    </Container>
  );
}

export default App;
