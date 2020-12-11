import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ProductForm />
        <Products />
      </>
    );
  }
}

export default App;
