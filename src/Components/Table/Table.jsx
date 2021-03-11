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

        {Object.keys(productList).map((category) => (
          <tbody>
            <tr className="title"><td>{category}</td></tr>
            {productList[category].map((product) => (
              <tr className="item-value">
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.inCartCount}</td>
                <td>{product.inCartCount * product.price}</td>
              </tr>
            ))}
          </tbody>
        ))}

      </table>
    </div>
  );
};
export default Table;
