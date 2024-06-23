import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Experience from './Experience';

test('renders Experience component correctly', () => {
  render(<Experience />);
  expect(screen.getByText('2022-2024')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer III')).toBeInTheDocument();
  expect(screen.getByText('JP Morgan Chase')).toBeInTheDocument();
  expect(screen.getByText('2021-2022')).toBeInTheDocument();
  expect(screen.getByText('Full stack Engineer')).toBeInTheDocument();
  expect(screen.getByText('Baanyan s-services')).toBeInTheDocument();
  expect(screen.getByText('2014-2017')).toBeInTheDocument();
  expect(screen.getByText('Frontend developer')).toBeInTheDocument();
  expect(screen.getByText('IC bank of China')).toBeInTheDocument();
});
