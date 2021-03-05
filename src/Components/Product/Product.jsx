/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import './Product.css';
// import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    return (
      <div className="product-card-element">
        <img src={this.props.product.url} alt="fruitItem" />
        <p>{this.props.product.name}</p>
        <p>
          MRP
          {this.props.product.price}
          /-
        </p>
        <Counter
          onIncrement={() => this.props.onIncrement(this.props.product.id)}
          onDecrement={() => this.props.onDecrement(this.props.product.id)}
          itemCount={this.props.product.count}
        />
      </div>
    );
  }
}
