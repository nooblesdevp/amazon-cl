import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';


import './App.scss';


function App() {
  return (
    <Router>

    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
