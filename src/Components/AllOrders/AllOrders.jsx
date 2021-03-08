/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Table from '../Table/Table';
import './AllOrder.css';

export default class AllOrders extends Component {
  render() {
    const { order } = this.props;
    return (
      <div>
        <h1>Past Orders </h1>
        <hr />
        {order.map((eachOrder) => (
          <>
            <table className="cart-table">
              <tr className="cart-table-header">
                <th>Order</th>
                <th>Items</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              <tr className="item-value">
                <td>{eachOrder.orderId}</td>
                <td>{eachOrder.noOfItems}</td>
                <td>{eachOrder.date}</td>
                <td>{eachOrder.amount}</td>
              </tr>
            </table>
            <Table productList={eachOrder.items} />
          </>
        ))}
      </div>
    );
  }
}
// AllOrders.propTypes={

// }
