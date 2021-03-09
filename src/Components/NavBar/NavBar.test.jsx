import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import NavBar from './NavBar';

describe(NavBar.name, () => {
  const itemCount = 0;
  it('should match default theme snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeContext.Provider value="light">
          <NavBar itemInCart={itemCount} />
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should match light theme snapshot', () => {
    const { container } = render(<BrowserRouter><NavBar itemInCart={itemCount} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should take to e-shoppers page', () => {
    render(<BrowserRouter><NavBar itemInCart={itemCount} /></BrowserRouter>);
    const eShoppers = screen.getByText('E-Shopper');
    fireEvent.click(eShoppers);
    expect(document.location.href).toBe('http://localhost/');
  });
  it('should take to All Orders page', () => {
    render(<BrowserRouter><NavBar itemInCart={itemCount} /></BrowserRouter>);
    const allOrders = screen.getByText('All Orders');
    fireEvent.click(allOrders);
    expect(document.location.href).toBe('http://localhost/allOrders');
  });
  it('should take to Cart page', () => {
    render(<BrowserRouter><NavBar itemInCart={itemCount} /></BrowserRouter>);
    const cart = screen.getByText('MyBasket');
    fireEvent.click(cart);
    expect(document.location.href).toBe('http://localhost/cart');
  });
});
