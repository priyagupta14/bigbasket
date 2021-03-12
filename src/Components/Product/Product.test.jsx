/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Product from './Product';

describe(Product.name, () => {
  const mockProps = {
    key: 1,
    category: 'abc',
    product:
      {
        key: 1,
        name: 'banana',
        url: 'banana',
        inCartCount: 0,
        price: 50,
      },
    itemCount: 1,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match snapshot', () => {
    const { container } = render(<Product {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display product details', () => {
    render(<Product {...mockProps} />);
    screen.getByText('banana');
    screen.getByText('MRP50/-');
    screen.getByTestId('product-img');
  });
});
