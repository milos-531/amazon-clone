import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        {/* HOMEPAGE */}
        <Route path="/">
          <Header/>
          <h1>Home page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
