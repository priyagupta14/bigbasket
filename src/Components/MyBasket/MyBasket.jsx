import React, { Component } from "react";

export default class MyBasket extends Component {
  render() {
    return (
      <div>
        <p>MyBasket</p>
        <p>mycart {this.props.itemInCart}</p>
      </div>
    );
  }
}
