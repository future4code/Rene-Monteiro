import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../Screen/HomePage.js"
import CreateTripPage from "../Screen/CreateTripPage"
import ListTripsPage from "../Screen/ListTripsPage"
import LoginPage from "../Screen/LoginPage"
import TripdetailsPage from "../Screen/TripDetailsPage"
import Formulario from '../Screen/Formulario.js';



const  Router =()=> {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path ='/'>
      <HomePage />
    </Route>
    <Route exact path ='/criarviagem'>
      <CreateTripPage />
    </Route>
    <Route exact path ='/listarviagens'>
      <ListTripsPage />
    </Route>
    <Route exact path ='/paginalogin'>
      <LoginPage />
    </Route>
    <Route exact path ='/detalhesdeviagens'>
      <TripdetailsPage />
    </Route>
    <Route exact path ='/formulario'>
      <Formulario />
    </Route>
    <Route>
      <div>Erro 404</div>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Router;
