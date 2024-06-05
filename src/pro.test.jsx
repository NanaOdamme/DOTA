// test/pro.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pro from '../src/pro';

test('renders subscription plans', () => {
  render(<Pro />);


  expect(screen.getByText(/Subscription Plans/i)).toBeInTheDocument();
  expect(screen.getByText(/Basic/i)).toBeInTheDocument();
  expect(screen.getByText(/Advanced/i)).toBeInTheDocument();
  expect(screen.getByText(/Pro/i)).toBeInTheDocument();

 
  expect(screen.getByText(/Start Free Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Advanced Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Pro Plan/i)).toBeInTheDocument();
});
