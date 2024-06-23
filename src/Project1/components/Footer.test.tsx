import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders Footer component with correct text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/@JoJo & Company/i);
  expect(footerElement).toBeInTheDocument();
});
