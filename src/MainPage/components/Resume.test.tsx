import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from './Resume';
import { buttonClickAnalytics } from '../../utils/analytics';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../utils/analytics', () => ({
    buttonClickAnalytics: jest.fn(),
}));

describe('Resume Component', () => {
    test('renders Resume component and defaults to Experience section', () => {
        render(
            <MemoryRouter>
                <Resume />
            </MemoryRouter>
        );
        expect(screen.getByText('My experience')).toBeInTheDocument();
        expect(screen.getByText('Software Engineer III')).toBeInTheDocument();
    });

    test('renders Education section when Education button is clicked', () => {
        render(
            <MemoryRouter>
                <Resume />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Education'));
        expect(screen.getByText('My education')).toBeInTheDocument();
        expect(screen.getByText('Mathematics')).toBeInTheDocument();
    });

    test('renders Skills section when Skills button is clicked', () => {
        render(
            <MemoryRouter>
                <Resume />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Skills'));
        expect(screen.getByText('My skills')).toBeInTheDocument();
        expect(screen.getByLabelText('HTML5')).toBeInTheDocument();
    });

    test('button click analytics is called with correct parameters', () => {
        render(
            <MemoryRouter>
                <Resume />
            </MemoryRouter>
        );
        const educationButton = screen.getByRole('button', { name: 'Education' });
        fireEvent.click(educationButton);
        expect(buttonClickAnalytics).toHaveBeenCalledWith('14', 'education');
    });
});
