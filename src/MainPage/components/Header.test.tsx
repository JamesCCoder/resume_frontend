import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { buttonClickAnalytics } from '../../utils/analytics';

jest.mock('../../utils/analytics', () => ({
  buttonClickAnalytics: jest.fn(),
}));

describe('Header Component', () => {
  test('renders Header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('James')).toBeInTheDocument();
    expect(screen.getAllByText('Home')).toHaveLength(1);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Hire me')).toBeInTheDocument();
  });

  test('handles button click analytics', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Home', { selector: 'a[data-id="1"]' }));
    expect(buttonClickAnalytics).toHaveBeenCalledWith('1', 'pc_homeButton');

    fireEvent.click(screen.getByText('Projects'));
    expect(buttonClickAnalytics).toHaveBeenCalledWith('2', 'pc_projectsButton');
  });

  test('opens and closes the menu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Initial state, menu should be closed
    expect(screen.queryByText('Project', { selector: 'a[data-id="7"]' })).not.toBeInTheDocument();

    // Open the menu
    fireEvent.click(screen.getByLabelText('hamburger-menu'));
    expect(screen.getByText('Home', { selector: 'a[data-id="6"]' })).toBeInTheDocument();
    expect(screen.getByText('Project', { selector: 'a[data-id="7"]' })).toBeInTheDocument();

    // Close the menu
    fireEvent.click(screen.getByLabelText('hamburger-menu'));
    expect(screen.queryByText('Project', { selector: 'a[data-id="7"]' })).not.toBeInTheDocument();
  });
});
