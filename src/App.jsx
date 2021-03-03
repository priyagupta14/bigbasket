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
          url: "../../../public/banana.jpg ",
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

  onIncrement(id) {
    // console.log("Incrementing", id);
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
    // console.log(newState);
    this.setState(newState);
    // console.log("Incrementin", this.state.products[0].id);
  }
  onDecrement(id) {
    // console.log("Decrementing", id);
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount - 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id && eachProduct.count > 0) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
    // console.log(newState);
    this.setState(newState);
    // console.log("Incrementin", this.state.products[0].id);
  }

  render() {
    return (
      <div>
        <NavBar itemInCart={this.state.cartCount} />
        {console.log(27, this.state)}
        <Home productList={this.state} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <>
//       <NavBar itemInCart={state.products.cartCount} />
//       {console.log(27, state)}
//       <Home productList={state} />
//     </>
//   );
// }

// export default App;
