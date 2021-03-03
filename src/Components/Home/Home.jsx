import React, { Component } from "react";
import Product from "../Product/Product";
import "./Home.css";
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.productList.products,
      cartCount: this.props.productList.cartCount,
    };
  }

  render() {
    console.log(45, this.state);
    const allProducts = this.state.products.map((eachProduct) => {
      return (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={() => this.props.onIncrement(eachProduct.id)}
          onDecrement={() => this.props.onDecrement(eachProduct.id)}
        />
      );
    });
    return (
      <>
        <h1> Fruits&Vegetables </h1>
        <div className="product-card">{allProducts}</div>
      </>
    );
  }
}
