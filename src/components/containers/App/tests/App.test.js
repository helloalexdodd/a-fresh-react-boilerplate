import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should take a snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

it('should have no accessibility errors', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
