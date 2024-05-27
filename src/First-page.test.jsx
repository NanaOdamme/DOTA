//test for first page
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './First-page.jsx';

test('renders HomePage with correct content', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );

  // Check if the heading is rendered
  expect(screen.getByText(/Welcome to Dota/i)).toBeInTheDocument();
  
  // Check if the paragraph is rendered
  expect(screen.getByText(/A place to buy and sell digital Assets/i)).toBeInTheDocument();
  
  // Check if the "Get Started" link is rendered
  const linkElement = screen.getByRole('link', { name: /Get Started/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/login');
});
