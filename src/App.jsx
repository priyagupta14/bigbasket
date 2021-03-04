import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "banana",
          url:
            "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
          count: 0,
          price: 50,
        },
        {
          id: 2,
          name: "apple",
          url:
            "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
          count: 0,
          price: 30,
        },
      ],
      cartCount: 0,
    };
  }

  onIncrement = (id) => {
    console.log("Incrementing", id);
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count + 1 };
        }
        return eachProduct;
      }),
    };
    console.log(42, newState); //count is getting updated
    this.setState(newState, () => console.log(59, this.state));
  };
  onDecrement = (id) => {
    console.log("Decrementing", id);
    const newState = {
      ...this.state,
      cartCount:
        this.state.cartCount > 0
          ? this.state.cartCount - 1
          : this.state.cartCount,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id && eachProduct.count > 0) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
    console.log(77, newState);
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <NavBar itemInCart={this.state.cartCount} />
        {/* {console.log(27, this.state)} */}
        <Home
          productList={this.state}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </div>
    );
  }
}
