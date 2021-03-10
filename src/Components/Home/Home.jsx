/* eslint-disable react/prop-types */ // how to add validation for onIncrement?
import React from 'react';
// import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.scss';

const Home = ({ categorizedProduct, onIncrement, onDecrement }) => (
  <div>
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
