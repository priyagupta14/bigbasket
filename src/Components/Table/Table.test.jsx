/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Table from './Table';

describe(Table.name, () => {
  const mockProps = {
    productList: {
      abc: [{
        category: 'abc',
        count: 2,
        id: 5,
        inCartCount: 0,
        name: 'milk',
        price: 10,
      },
      ],
    },
  };
  it('should match the snapshot', () => {
    const { container } = render(<Table {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display pastOrder header', () => {
    render(<Table {...mockProps} />);
    screen.getByText('ITEM DESCRIPTION');
    screen.getByText('UNIT PRICE');
    screen.getByText('QUANTITY');
    screen.getByText('SUBTOTAL');
  });
  it('should match the table rows', () => {
    render(<Table {...mockProps} />);
    screen.getByText('milk');
    screen.getByText('10');
    screen.getByText('2');
    screen.getByText('20');
  });
});
