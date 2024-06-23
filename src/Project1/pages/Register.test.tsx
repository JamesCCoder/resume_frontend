import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';
import Header from 'Project1/components/Header';
import Footer from 'Project1/components/Footer';
import LoginForm from 'Project1/components/LoginForm';

// Mock the imported components
jest.mock('Project1/components/Header', () => {
  return jest.fn(() => <div>Header Component</div>);
});

jest.mock('Project1/components/Footer', () => {
  return jest.fn(() => <div>Footer Component</div>);
});

jest.mock('Project1/components/LoginForm', () => {
  return jest.fn(() => <div>LoginForm Component</div>);
});

describe('Register Component', () => {
  it('renders Header, LoginForm, and Footer components', () => {
    const { getByText } = render(<Register />);
    
    // Check if the mocked components are rendered
    expect(getByText('Header Component')).toBeInTheDocument();
    expect(getByText('LoginForm Component')).toBeInTheDocument();
    expect(getByText('Footer Component')).toBeInTheDocument();
  });
});
