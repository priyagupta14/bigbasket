import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyBasket from './MyBasket';

xdescribe(MyBasket.name, () => {
  const mockProps = {
    productList: [],
  };
  it('sanity test', () => {
    expect(1 + 1).toBe(2);
  });
});
