import React, { Component } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import "./Home.css";
export default class Home extends Component {
  render() {
    const allProducts = this.props.productList.map((eachProduct) => {
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

Home.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
