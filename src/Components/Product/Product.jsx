import React, { Component } from "react";
import Counter from "../Counter/Counter";
import "./Product.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-card-element">
        <p>{this.props.product.name}</p>
        <img src="{this.props.product.url}" alt="fruitItem" />
        <p>MRP {this.props.product.price}/-</p>
        <Counter
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          itemCount={this.props.product.count}
        />
      </div>
    );
  }
}
export default Product;
