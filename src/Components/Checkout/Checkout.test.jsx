import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import userEvent from '@testing-library/user-event';
import Checkout from './Checkout';

describe(Checkout.name, () => {
  let mockProp;
  beforeEach(() => {
    mockProp = {
      productList: {
        abc: [
          {
            id: 1,
            name: 'abc',
            price: 20,
            inCartCount: 5,
          },
        ],
      },
      orderCart: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match the snapshot', async () => {
    const { container } = render(<Checkout {...mockProp} />);
    expect(container).toMatchSnapshot();
  });

  // test();
});
