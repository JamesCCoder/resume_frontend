import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Education from './Education';

test('renders Education component correctly', () => {
  render(<Education />);

  expect(screen.getByText('2007-2011')).toBeInTheDocument();
  expect(screen.getByText('Mathematics')).toBeInTheDocument();
  expect(screen.getByText('Northwest Uni')).toBeInTheDocument();

  expect(screen.getByText('2018-2020')).toBeInTheDocument();
  expect(screen.getByText('MBA')).toBeInTheDocument();
  expect(screen.getByText('Missouri state Uni')).toBeInTheDocument();
});
