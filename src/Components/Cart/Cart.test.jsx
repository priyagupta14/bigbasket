/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockProps = {
    productList: [],
  };
  it('sanity test', () => {
    expect(1 + 1).toBe(2);
  });
  it('should display headers', () => {
    render(<Cart {...mockProps} />);
    screen.getByText('Your Basket(0items(s))');
  });
});
