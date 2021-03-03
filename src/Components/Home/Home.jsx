import React, { Component } from "react";
import Product from "../Product/Product";
import "./Home.css";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "banan",
          url: "../../../public/banana.jpg ",
          count: 0,
          price: 0,
        },
        {
          id: 2,
          name: "apple",
          url: "url",
          count: 0,
          price: 0,
        },
        {
          id: 3,
          name: "nan",
          url: "url",
          count: 0,
          price: 0,
        },
      ],
      cartCount: 0,
    };
  }
  onIncrement(id) {
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
    console.log(newState);
    this.setState(newState);
    // console.log("Incrementin", this.state.products[0].id);
  }
  onDecrement(id) {
    console.log("Decrementing", id);
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
    console.log(newState);
    this.setState(newState);
    // console.log("Incrementin", this.state.products[0].id);
  }
  render() {
    const allProducts = this.state.products.map((eachProduct) => {
      return (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={() => this.onIncrement(eachProduct.id)}
          onDecrement={() => this.onDecrement(eachProduct.id)}
        />
      );
    });
    return <div className="product-card">{allProducts}</div>;
  }
}
