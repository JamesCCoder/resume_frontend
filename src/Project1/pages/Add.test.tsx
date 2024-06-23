import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Add from './Add';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the imported components
jest.mock("Project1/components/Input", () => () => <div>Mocked Input Component</div>);
jest.mock("Project1/components/Header", () => () => <div>Mocked Header Component</div>);
jest.mock("Project1/components/Footer", () => () => <div>Mocked Footer Component</div>);

describe('Add Component', () => {
    test('renders Add component correctly', () => {
        render(
            <Router>
                <Add />
            </Router>
        );

        expect(screen.getByText('Mocked Header Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Input Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Footer Component')).toBeInTheDocument();
    });
});
