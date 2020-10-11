import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders'
import { useStateValue } from './Components/StateProvider/StateProvider';
import { auth } from './Components/firebase/firebase'

import './App.scss';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    
  }, []);

  return (
    <Router>

    <div className="app">
      <Switch>
         <Route path="/orders">
          <Header />
          <Orders />
        </Route>
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
