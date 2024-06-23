import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import P1_home from './P1_home';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the imported components
jest.mock("Project1/components/Header", () => () => <div>Mocked Header Component</div>);
jest.mock("Project1/components/Footer", () => () => <div>Mocked Footer Component</div>);
jest.mock("Project1/components/List", () => () => <div>Mocked List Component</div>);

describe('P1_home Component', () => {
    test('renders P1_home component correctly', () => {
        render(
            <Router>
                <P1_home />
            </Router>
        );

        expect(screen.getByText('Mocked Header Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked List Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Footer Component')).toBeInTheDocument();
    });
});
