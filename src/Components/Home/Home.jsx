import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Product from '../Product/Product';

const Home = ({ categorizedProduct, onIncrement, onDecrement }) => (
  <div data-testid="home-page">
    {Object.keys(categorizedProduct).map((category) => (
      <div key={category}>
        <h1>{category}</h1>
        <div className="product-card">
          {categorizedProduct[category].map((product) => (
            <Product
              key={product.id}
              category={category}
              product={product}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);
export default Home;

Home.propTypes = {
  categorizedProduct: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        inCartCount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
Home.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
