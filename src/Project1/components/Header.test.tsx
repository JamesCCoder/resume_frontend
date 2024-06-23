import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders Header component with correct text and link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check if the header title is rendered correctly
  const headerTitle = screen.getByText(/Student management system/i);
  expect(headerTitle).toBeInTheDocument();

  // Check if the "Back to home" link is rendered correctly
  const backToHomeLink = screen.getByText(/Back to home/i);
  expect(backToHomeLink).toBeInTheDocument();
  expect(backToHomeLink).toHaveAttribute('href', '/');
});
