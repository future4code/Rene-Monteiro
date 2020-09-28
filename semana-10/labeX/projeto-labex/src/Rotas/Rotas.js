import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from '../Paginas/Home'
import Login from '../Paginas/Login'
import FormularioInscricao from '../Paginas/FormularioInscricao'
import CriarViagens from '../Paginas/CriarViagens'
import ListarViagens from '../Paginas/ListarViagens'
import ApagarViagens from '../Paginas/ApagarViagens'



export default function Rotas() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path='/'>
      <Home/>
      </Route>

      <Route exact path='/FormularioInscricao'>
        <FormularioInscricao/>
      </Route>

      <Route exact path ='/Login'>
        <Login/>
      </Route>

      <Route exact path='/CriarViagens'>
        <CriarViagens/>
      </Route>

      <Route exact path ='/ListarViagens'>
        <ListarViagens/>
      </Route>

      <Route exact path ='/ApagarViagens'>
        <ApagarViagens/>
      </Route>

      <Route>
        <p>Erro 404</p>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}


