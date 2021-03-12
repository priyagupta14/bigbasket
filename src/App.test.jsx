import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import App from './App';
import { mockOrderedOrder, mockPostOrder, mockProducts } from './mockdata/api';
import { getItems, getOrders } from './Utils/api/api';

describe(App.name, () => {
  // let mockGetItems= jest.spyOn();
  // beforeEach(() => {
  //   getItems.mockResolvedValue(mockProducts);
  //   getItems.mockClear();
  // });
  // test('should match snapShot', async () => {
  //   const { container } = await waitFor(() => render(<App />));
  //   expect(container).toMatchSnapshot();
  //   // await waitFor(() => render(<App />));
  // });
  // test('should match the snapshot', async () => {
  //   await waitFor(() => render(<App />));
  //   expect(getItems).toHaveBeenCalledTimes(1);
  // });
  xtest('should render Home component and route t', () => {

  });
});
