import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './Skills';

describe('Skills component', () => {
    test('renders all logos with correct tooltips', () => {
        render(<Skills />);

        expect(screen.getByLabelText('HTML5')).toBeInTheDocument();
        expect(screen.getByLabelText('CSS3')).toBeInTheDocument();
        expect(screen.getByLabelText('JavaScript')).toBeInTheDocument();
        expect(screen.getByLabelText('React')).toBeInTheDocument();
        expect(screen.getByLabelText('Java')).toBeInTheDocument();
        expect(screen.getByLabelText('Docker')).toBeInTheDocument();
        expect(screen.getByLabelText('Jenkins')).toBeInTheDocument();
        expect(screen.getByLabelText('AWS')).toBeInTheDocument();
        expect(screen.getByLabelText('Font Awesome')).toBeInTheDocument();
        expect(screen.getByLabelText('Bootstrap')).toBeInTheDocument();
        expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
        expect(screen.getByLabelText('Figma')).toBeInTheDocument();
        expect(screen.getByLabelText('MedApps')).toBeInTheDocument();
    });
});
