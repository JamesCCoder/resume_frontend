import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

jest.useFakeTimers();

test('renders Footer component and increments values', () => {
    render(<Footer />);

    // 快进时间以覆盖所有setInterval调用
    act(() => {
        jest.advanceTimersByTime(2000); // 快进2000ms，确保所有计时器都触发
    });

    // 检查最终的目标值
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
});
