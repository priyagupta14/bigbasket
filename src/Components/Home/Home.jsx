import React, { Component } from "react";
import Product from "../Product/Product";
import "./Home.css";
export default class home extends Component {
  render() {
    console.log(45, this.props);
    const allProducts = this.props.productList.products.map((eachProduct) => {
      return (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
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
