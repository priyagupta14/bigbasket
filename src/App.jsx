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
          url: "url",
          count: 0,
          price: 50,
        },
        {
          id: 2,
          name: "apple",
          url: "url",
          count: 0,
          price: 30,
        },
      ],
      cartCount: 0,
    };
  }

  onIncrement = (id) => {
    console.log("Incrementing", 32);
    // this.setState((prevState) => {
    //   const newState = {
    //     ...prevState,
    //     cartCount: this.state.cartCount + 1,
    //     products: this.state.products.map((eachProduct) => {
    //       if (eachProduct.id === id) {
    //         return { ...eachProduct, count: eachProduct.count + 1 };
    //       }
    //       return eachProduct;
    //     }),
    //   };
    //   return { products: newState.products };
    // });

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
    console.log(42, newState);
    console.log(43, this.state.products);
    this.setState(newState);
  };
  onDecrement = () => {
    console.log("Decrementing", 47);
    const newState = {
      ...this.state,
      cartCount:
        this.state.cartCount > 0
          ? this.state.cartCount - 1
          : this.state.cartCount,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === 1 && eachProduct.count > 0) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
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
