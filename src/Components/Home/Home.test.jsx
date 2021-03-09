/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Home from './Home';

describe(Home.name, () => {
  const mockProps = {
    productList: [{
      id: 1,
      name: 'banana',
      url: 'banana',
      count: 0,
      price: 50,
    },
    {
      id: 2,
      name: 'apple',
      url: 'apple',
      count: 0,
      price: 30,
    },
    ],
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should display header', () => {
    render(<Home {...mockProps} />);
    screen.getByText('Fruits&Vegetables');
  });
});
