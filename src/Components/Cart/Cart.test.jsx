/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockProps = {
    productList: {},
    cartCount: 5,
  };
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
    screen.getByText('Your Basket(5item(s))');
    screen.getByText('TOTAL');
    screen.getByText('Rs.0');
  });
  // ask: why it is giving tagname of button as a
  it('should redirect to checkout page', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    const checkoutPage = screen.getByText('CHECKOUT');
    expect(checkoutPage.tagName).toBe('A');
    fireEvent.click(checkoutPage);
    expect(document.location.href).toBe('http://localhost/checkout');
  });
  it('should redirect to home page', () => {
    render(<BrowserRouter><Route><Cart {...mockProps} /></Route></BrowserRouter>);
    screen.logTestingPlaygroundURL();
    const homePage = screen.getByText('CONTINUE SHOPPING');
    expect(homePage.tagName).toBe('A');
    fireEvent.click(homePage);
    expect(document.location.href).toBe('http://localhost/');
  });
});
