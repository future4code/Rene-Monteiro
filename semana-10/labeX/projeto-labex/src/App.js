import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Router from './Router/Router.js'
import LoginPage from './Screen/LoginPage.js';


function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
