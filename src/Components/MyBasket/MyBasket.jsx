/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class MyBasket extends Component {
  render() {
    return (
      <div className="mybasket-container">
        <p>
          mycart
          {this.props.itemInCart}
        </p>
      </div>
    );
  }
}
