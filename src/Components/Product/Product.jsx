import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import './Product.scss';

const Product = ({
  product, onIncrement, onDecrement, category,
}) => (
  <div className="product-card-element">
    <img data-testid="product-img" src={product.url} alt="fruitItem" />
    <p>{product.name}</p>
    <div className="price-counter">
      <p>
        MRP
        {product.price}
        /-
      </p>
      <Counter
        onIncrement={() => onIncrement(product.id, category)}
        onDecrement={() => onDecrement(product.id, category)}
        itemCount={product.inCartCount}
      />
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  category: PropTypes.string.isRequired,
};
Product.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Product;
