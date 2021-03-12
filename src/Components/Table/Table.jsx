/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const Table = (props) => {
  const { productList } = props;
  return (
    <table className="cart-table" border="1">
      <thead>
        <tr className="cart-table-header">
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      {Object.keys(productList).map((category) => (
        <tbody key={category}>
          <tr className="title"><td>{category}</td></tr>
          {productList[category].map((product) => (
            <tr className="item-value" key={category + product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{(product.inCartCount) ? product.inCartCount : product.count }</td>
              <td>
                {((product.inCartCount)
                  ? product.inCartCount : product.count) * product.price}

              </td>
            </tr>
          ))}
        </tbody>
      ))}

    </table>
  );
};
export default Table;

// Table.propTypes = {
//   productList: PropTypes.shape({
//     category: PropTypes.arrayOf(
//       PropTypes.shape({
//         inCartCount: PropTypes.number.isRequired,
//         price: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//       }),
//     ),
//   }).isRequired,
// };
