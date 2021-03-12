import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { mockOrderedOrder, mockPostOrder, mockProducts } from './mockdata/api';
import axiosApi from './Utils/api/api';

describe(App.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(axiosApi, 'getItems').mockResolvedValue(mockProducts);
  });

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
  test('should match the snapshot', async () => {
    const { container } = await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    expect(container).toMatchSnapshot();
  });
  xtest('should render Home component and route t', () => {

  });
});
