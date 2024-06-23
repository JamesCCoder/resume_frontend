import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for jest matchers
import React from 'react';
import Aboutme from './Aboutme'; // Adjust the path as necessary

describe('Aboutme Component', () => {
  test('renders the Aboutme component', () => {
    render(<Aboutme />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('James Wu')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('5+ years')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('justinwpro@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('English, Chinese')).toBeInTheDocument();
  });
});
