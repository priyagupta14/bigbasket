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

  // onIncrement(id) {
  //   console.log("Incrementing", 32);
  //   const newState = {
  //     ...this.state,
  //     cartCount: this.state.cartCount + 1,
  //     products: this.state.products.map((eachProduct) => {
  //       if (eachProduct.id === id) {
  //         return { ...eachProduct, count: eachProduct.count + 1 };
  //       }
  //       return eachProduct;
  //     }),
  //   };
  //   // console.log(43, this.state);
  //   console.log(43, this.state.cartCount);
  //   this.setState(newState);
  // }
  // onDecrement() {
  //   console.log("Decrementing");
  //   // const newState = {
  //   //   ...this.state,
  //   //   cartCount: this.state.cartCount - 1,
  //   //   products: this.state.products.map((eachProduct) => {
  //   //     if (eachProduct.id === id && eachProduct.count > 0) {
  //   //       return { ...eachProduct, count: eachProduct.count - 1 };
  //   //     }
  //   //     return eachProduct;
  //   //   }),
  //   // };
  //   // this.setState(newState);
  //   // console.log("Incrementin", this.state.products[0].id);
  // }

  render() {
    // console.log(45, this.state);
    const allProducts = this.state.products.map((eachProduct) => {
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
