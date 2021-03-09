import React from 'react';
import {
  fireEvent, getByText, render, screen,
} from '@testing-library/react';
import HookCounter from './HookCounter';

describe(HookCounter.name, () => {
  test('should display counter count', () => {
    render(<HookCounter />);
    screen.getByText('counter:-1');
  });
  test('should display counter count', () => {
    render(<HookCounter />);
    const incrementButton = screen.getByText('Increment Counter');
    expect(incrementButton.tagName).toBe('BUTTON');
  });
  test('should update the counter count', () => {
    render(<HookCounter />);
    const incrementButton = screen.getByText('Increment Counter');
    fireEvent.click(incrementButton);
    screen.getByText('counter:1');
  });
  test('should match snapshot', () => {
    const container = render(<HookCounter />);
    expect(container).toMatchSnapshot();
  });
});
