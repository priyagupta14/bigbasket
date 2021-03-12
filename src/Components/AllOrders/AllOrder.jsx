/* eslint-disable react/prop-types */
import React from 'react';
import './AllOrder.css';
import Table from '../Table/Table';
import groupByCategory from '../../Utils/GroupBy/groupByCategory';

const AllOrders = ({ order }) => {
  const total = order.map((eachOrder) => (
    eachOrder.items.reduce((acc, curVal) => acc + curVal.price, 0)));
  return (
    <div>
      <h1>Past Orders</h1>
      <hr />
      <table className="orders-table" border="1">
        <thead>
          <tr className="orders-table-header">
            <th>Order</th>
            <th>items</th>
            <th>Order Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        {order.map((eachOrder, index) => (
          <React.Fragment key={eachOrder.id}>
            <tbody>
              <tr className="order-value">
                <td>{eachOrder.id}</td>
                <td>{eachOrder.items.length}</td>
                <td>{new Date(eachOrder.date).toString()}</td>
                <td>{total[index]}</td>
              </tr>
            </tbody>
            <Table
              key={eachOrder.id + eachOrder
                .items.length}
              productList={groupByCategory(eachOrder.items)}
            />
          </React.Fragment>

        ))}
      </table>
    </div>
  );
};
export default AllOrders;
