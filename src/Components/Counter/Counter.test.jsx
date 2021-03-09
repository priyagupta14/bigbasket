/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Counter from './Counter';

describe(Counter.name, () => {
  const mockProp = {
    itemCount: 0,
    onDecrement: jest.fn(),
    onIncrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match snapshot', () => {
    const { container } = render(<Counter {...mockProp} />);
    expect(container).toMatchSnapshot();
  });
  it('should display button and content', () => {
    render(<Counter {...mockProp} />);
    const incrementElement = screen.getByText('+');
    expect(incrementElement.tagName).toBe('BUTTON');
    const decrementElement = screen.getByText('-');
    expect(decrementElement.tagName).toBe('BUTTON');
    screen.getByText('0 in basket');
  });
  it('should increment product count', () => {
    render(<Counter {...mockProp} />);
    const incrementElement = screen.getByText('+');
    fireEvent.click(incrementElement);
    expect(mockProp.onIncrement).toHaveBeenCalled();
  });
  it('should decrement product count', () => {
    render(<Counter {...mockProp} />);
    const decrementElement = screen.getByText('-');
    fireEvent.click(decrementElement);
    expect(mockProp.onDecrement).toHaveBeenCalled();
  });
});
