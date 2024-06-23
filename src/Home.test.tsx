import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import Portfolio from 'MainPage/Portfolio';

jest.mock('MainPage/Portfolio', () => {
  return jest.fn(() => <div>Portfolio Component</div>);
});

describe('Home Component', () => {
  it('renders the Portfolio component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Portfolio Component')).toBeInTheDocument();
  });
});
