/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Home from './Home';

describe(Home.name, () => {
  const mockProps = {
    categorizedProduct:
    {
      abc: [{
        category: 'abc',
        count: 2,
        id: 5,
        inCartCount: 0,
        name: 'milk',
        price: 10,
      },
      ],
      bcd:
        [
          {
            category: 'bcd',
            count: 2,
            id: 5,
            inCartCount: 0,
            name: 'apple',
            price: 10,
          },
        ],

    },
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match the snapshot', () => {
    const { container } = render(<Home {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display header', () => {
    render(<Home {...mockProps} />);
  });
});
