import React, {useState, useEffect} from 'react';
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
  const [pagina, setPagina]= useState(1)
  
  const mudarPagina = () =>{
    if (pagina === 0){
      setPagina(1)
    } else{
      setPagina(0)
    }
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
      <Button >Limpar Macthes</Button>
    </Container>
  );
}

export default App;
