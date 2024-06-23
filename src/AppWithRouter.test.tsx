import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppWithRouter from './AppWithRouter';
import App from './App';

// Mock the App component
jest.mock('./App', () => () => <div>Mocked App Component</div>);

describe('AppWithRouter Component', () => {
    test('renders App component wrapped with Router', () => {
        render(<AppWithRouter />);

        expect(screen.getByText('Mocked App Component')).toBeInTheDocument();
    });
});
