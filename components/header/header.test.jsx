import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header', () => {
  it('should render Header', () => {
    render(<Header />);

    const navLink = screen.getByRole('link', { name: 'Home' });

    expect(navLink).toBeInTheDocument();
  });

  it('should navigate to the correct link', () => {
    render(<Header />);

    const navLink = screen.getByRole('link', { name: 'Home' });

    expect(navLink).toHaveAttribute('href', '/');
  });

  it('should have the hover class as "orange"', () => {
    render(<Header />);

    const navLink = screen.getByRole('link', { name: 'Home' });

    expect(navLink).toHaveClass('hover:text-orange');
  });
});
