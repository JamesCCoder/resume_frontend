import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Circle from './Circle';

describe('Circle component', () => {
  it('should render correctly', () => {
    const { container } = render(<Circle />);
    expect(container.firstChild).toHaveClass('banner');
  });

  it('should handle mouse move events', () => {
    const { container } = render(<Circle />);
    const banner = container.firstChild as HTMLElement;
    
    fireEvent.mouseMove(banner, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(banner, { clientX: 200, clientY: 200 });
    
  });

  it('should handle touch move events', () => {
    const { container } = render(<Circle />);
    const banner = container.firstChild as HTMLElement;
    
    fireEvent.touchMove(banner, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(banner, { touches: [{ clientX: 200, clientY: 200 }] });
  });
});
