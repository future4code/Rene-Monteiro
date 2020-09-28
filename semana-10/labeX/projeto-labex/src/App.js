import React from 'react';
import { ThemeProvider } from "@chakra-ui/core";
import FormularioInscricao from './Paginas/FormularioInscricao';
import Home from './Paginas/Home'
import Rotas from './Rotas/Rotas'


export default function App() {
  return (
    <ThemeProvider >
      <Rotas  />
    </ThemeProvider>
  )
}


