import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        {/* HOMEPAGE */}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
