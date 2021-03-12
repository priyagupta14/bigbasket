import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';
import AllOrders from './AllOrder';

describe(AllOrders.name, () => {
  const mockProps = {
    order: [
      {
        items: [
          {
            id: 1,
            name: 'pp',
            count: 20,
            price: 12,
            category: 'idk',
          },
        ],
        id: 1,
        date: 123,
      },
    ],
    productList: [],
  };
  it('should match the snapShot', () => {
    const { container } = render(<BrowserRouter><AllOrders {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should display Past Orders and headers', () => {
    render(<AllOrders {...mockProps} />);
    screen.getByText('Past Orders');
    screen.getByText('Order');
    screen.getByText('items');
    screen.getByText('Order Date');
    screen.getByText('Amount');
  });
});
