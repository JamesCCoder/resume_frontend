import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the imported components
jest.mock("Project1/components/Header", () => () => <div>Mocked Header Component</div>);
jest.mock("Project1/components/Footer", () => () => <div>Mocked Footer Component</div>);
jest.mock("Project1/components/LoginForm", () => () => <div>Mocked LoginForm Component</div>);

describe('Login Component', () => {
    test('renders Login component correctly', () => {
        render(
            <Router>
                <Login />
            </Router>
        );

        expect(screen.getByText('Mocked Header Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked LoginForm Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Footer Component')).toBeInTheDocument();
    });
});
