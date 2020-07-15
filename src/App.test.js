import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders projects link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders resume link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Resume/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders email link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});