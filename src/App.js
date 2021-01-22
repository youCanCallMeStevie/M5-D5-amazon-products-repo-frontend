import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductForm from "./components/ProductForm";

import Carts from "./components/Carts";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route path="/" component={ProductForm} exact />

          <Route path="/carts" component={Carts} exact />
        </Router>
      </>
    );
  }
}

export default App;
