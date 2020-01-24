import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addStrikeTest } from './App'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders properly', () => {
  render(<App />);
});

test('strike function', () => {
  const currentScore = 1;
  const expected = 2;

  const actual = addStrikeTest(currentScore);

  expect(actual).toBe(expected);
})