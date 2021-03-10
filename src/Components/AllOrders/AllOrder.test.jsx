import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import AllOrder from './AllOrders';

describe(AllOrder.name, () => {
  const mockProps = [
    {
      orderId: 1,
      noOfItems: 3,
      date: 'Sun 04 Mar 2018',
      amount: 120,
      items: [
        {
          id: 1,
          name: 'Banana',
          count: 0,
          quantity: 1,
          price: 40,
        },
        {
          id: 2,
          image: './assets/apple.png',
          name: 'Apple',
          count: 0,
          quantity: 1,
          price: 40,
        },
      ],
    },
  ];
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should display Past Orders and headers', () => {
    render(<AllOrder order={mockProps} />);
    screen.getByText('Past Orders');
    screen.getByText('Order');
    screen.getByText('Items');
    screen.getByText('Date');
    screen.getByText('Amount');
  });
});
