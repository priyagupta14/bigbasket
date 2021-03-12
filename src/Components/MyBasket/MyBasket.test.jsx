import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyBasket from './MyBasket';

describe(MyBasket.name, () => {
  it('sanity test', () => {
    expect(1 + 1).toBe(2);
  });
  it('should display "MyCart" and items in my cart', () => {
    render(<MyBasket itemInCart={0} />);
    screen.getByText('MyCart0');
  });
});
