import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Detail from './Detail';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the imported components
jest.mock("Project1/components/Header", () => () => <div>Mocked Header Component</div>);
jest.mock("Project1/components/Footer", () => () => <div>Mocked Footer Component</div>);
jest.mock("Project1/components/Info", () => () => <div>Mocked Info Component</div>);

describe('Detail Component', () => {
    test('renders Detail component correctly', () => {
        render(
            <Router>
                <Detail />
            </Router>
        );

        expect(screen.getByText('Mocked Header Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Info Component')).toBeInTheDocument();
        expect(screen.getByText('Mocked Footer Component')).toBeInTheDocument();
    });
});
