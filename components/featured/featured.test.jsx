import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Featured from './index';

describe('Featured', () => {
  it('should render Featured', () => {
    render(<Featured />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it('should have correct link text and its color should be "orange"', () => {
    render(<Featured />);

    const button = screen.getByRole('link', { name: /read more/i });

    expect(button).toHaveClass('bg-orange');
  });
});
