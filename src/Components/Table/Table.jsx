/* eslint-disable react/prop-types */
import React from 'react';

const Table = (props) => {
  const { productList } = props;

  return (
    <div>
      <table className="cart-table">
        <thead>
          <tr className="cart-table-header">
            <th>ITEM DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="title"><td>Fruits&Vegatables</td></tr>
          {productList.map((eachItem) => (
            <tr className="item-value" key={eachItem.id}>
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.inCartCount}</td>
              <td>{eachItem.price * eachItem.inCartCount}</td>
            </tr>
          ))}
          <tr className="title"><td>Dairy Products</td></tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
