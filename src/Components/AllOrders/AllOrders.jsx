/* eslint-disable react/prop-types */
import React from 'react';
import './AllOrder.css';
// import Table from '../Table/Table';

const AllOrders = () => (
  <div>
    <h1>Past Orders</h1>
    <hr />
    <table className="cart-table" border="1">
      <thead>
        <tr className="orders-table-header">
          <th>Order</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123</td>
        </tr>
      </tbody>

    </table>
  </div>
);
export default AllOrders;
// AllOrders.propTypes={

// }
