/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Product from './Product';
import Counter from '../Counter/Counter';

describe(Product.name, () => {
  const mockProps = {
    product:
      {
        id: 1,
        name: 'banana',
        url: 'banana',
        count: 0,
        price: 50,
      },

    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity test', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<Product {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display product details', () => {
    render(<Product {...mockProps} />);
    screen.getByText('banana');
    // screen.getByTestId('banana');
    screen.getByText('MRP50/-');
    render(<Counter
      itemCount={mockProps.product.id}
      onDecrement={mockProps.onDecrement}
      onIncrement={mockProps.onIncrement}
    />);
  });
});
