import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <h1>Simple E-commerce</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;

