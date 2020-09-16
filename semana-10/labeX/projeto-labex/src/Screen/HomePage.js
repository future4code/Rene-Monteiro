import React from 'react';
import styled from "styled-components"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Formulario, PaginaLogin, } from '../Router/GoToPages'
import { useHistory } from "react-router-dom"


const Container = styled.button`

`

function HomePage() {
  const history = useHistory()
  return (
    <div>
      <p>Home Page</p>
      <Container onClick={()=>Formulario(history)}>Formulario</Container>
      <Container onClick={()=>PaginaLogin(history)}>Login Administrador</Container>
    </div>
  );
}

export default HomePage;
