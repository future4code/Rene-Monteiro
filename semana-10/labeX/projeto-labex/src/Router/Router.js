import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../Screen/HomePage/HomePage.js"
import CreateTripPage from "../Screen/CreateTripPage/CreateTripPage"
import ListTripsPage from "../Screen/ListTripsPage/ListTripsPage"
import LoginPage from "../Screen/LoginPage/LoginPage"
import TripdetailsPage from "../Screen/TripDetailsPage/TripDetailsPage"



const  Router =()=> {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path ='/home'>
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
    <Route>
      <div>Erro 404</div>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Router;
