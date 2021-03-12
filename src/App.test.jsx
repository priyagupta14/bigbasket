import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import App from './App';
import {
  mockOrderedOrder, mockOrders, mockPostOrder, mockProducts,
} from './mockdata/api';
import apiUtil from './Utils/api/api';

describe(App.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(apiUtil, 'getItems').mockResolvedValue(mockProducts);
    jest.spyOn(apiUtil, 'getOrders').mockResolvedValue(mockOrders);
    jest.spyOn(apiUtil, 'postOrders').mockResolvedValue(mockPostOrder);
  });
  test('should match the snapshot', async () => {
    const { container } = await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    expect(container).toMatchSnapshot();
  });
  test('should render home-page when clicked on EShoppers', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByText('E-Shopper');

    screen.logTestingPlaygroundURL();

    await waitFor(() => { fireEvent.click(eShopper); });
    screen.getByTestId('home-page');
    expect(document.location.href).toBe('http://localhost/');
  });
  xtest('should render AllOrders page when clicked on AllOrders', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const allOrders = screen.getByText('All Orders');
    await waitFor(() => { fireEvent.click(allOrders); });
    screen.getByTestId('allOrders-page');
    expect(document.location.href).toBe('http://localhost/allOrders');
  });
  test('should render My Cart page when clicked on myBasket', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const myBasket = screen.getByText('MyBasket');
    await waitFor(() => { fireEvent.click(myBasket); });
    screen.getByTestId('cart-page');
    expect(document.location.href).toBe('http://localhost/cart');
  });
  test('should render My Cart page when clicked on myBasket', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByText('E-Shopper');
    await waitFor(() => { fireEvent.click(eShopper); });
    screen.getByTestId('home-page');
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
  });
  test('should render My Cart page when clicked on myBasket', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByText('E-Shopper');
    await waitFor(() => { fireEvent.click(eShopper); });
    screen.getByTestId('home-page');
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
  });
  test('should render checkout-page when clicked on Checkout', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const myBasket = screen.getByText('MyBasket');
    await waitFor(() => { fireEvent.click(myBasket); });
    screen.getByTestId('cart-page');
    const checkout = screen.getByText('CHECKOUT');
    await waitFor(() => { fireEvent.click(checkout); });
    expect(document.location.href).toBe('http://localhost/checkout');
  });
  test('should render home-page when clicked on Checkout', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const myBasket = screen.getByText('MyBasket');
    await waitFor(() => { fireEvent.click(myBasket); });
    screen.getByTestId('cart-page');
    const homePage = screen.getByText('CONTINUE SHOPPING');
    await waitFor(() => { fireEvent.click(homePage); });
    expect(document.location.href).toBe('http://localhost/');
  });
  test('should not get items', async () => {
    const mockReject = { data: null, error: 'error' };
    jest.spyOn(apiUtil, 'getItems').mockRejectedValue(mockReject);
  });
});
