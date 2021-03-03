import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="product-counter">
        <button onClick={this.props.onIncrement}>+</button>
        <p>{this.props.itemCount} in basket</p>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}
