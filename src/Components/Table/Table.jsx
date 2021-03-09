/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const { productList } = this.props;

    return (
      <div>
        <table className="cart-table">
          <tr className="cart-table-header">
            <thead>ITEM DESCRIPTION</thead>
            <thead>UNIT PRICE</thead>
            <thead>QUANTITY</thead>
            <thead>SUBTOTAL</thead>
          </tr>
          <tr className="title">Fruits&Vegatables</tr>
          {productList.map((eachItem) => (
            <tr className="item-value">
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.count}</td>
              <td>{eachItem.price * eachItem.count}</td>
            </tr>
          ))}
          <tr className="title">Dairy Products</tr>
        </table>
      </div>
    );
  }
}
