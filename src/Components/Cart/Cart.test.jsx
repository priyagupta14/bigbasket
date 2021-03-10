/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockProps = {
    productList: [],
  };
  it('sanity test', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Cart {...mockProps} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should display headers', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    screen.getByText('Your Basket(0item(s))');
    screen.getByText('ITEM DESCRIPTION');
    screen.getByText('UNIT PRICE');
    screen.getByText('QUANTITY');
    screen.getByText('SUBTOTAL');

    screen.getByText('SUBTOTAL');
  });
});
