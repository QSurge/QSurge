import { render } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar', () => {
  it('renders the correct month and year', () => {
    const { getByText } = render(<Calendar date={new Date('2022-03-01')} />);
    expect(getByText('March 2022')).toBeInTheDocument();
  });

  it('renders the correct days of the week', () => {
    const { getByText } = render(<Calendar date={new Date('2022-03-01')} />);
    expect(getByText('Su')).toBeInTheDocument();
    expect(getByText('Mo')).toBeInTheDocument();
    expect(getByText('Tu')).toBeInTheDocument();
    expect(getByText('We')).toBeInTheDocument();
    expect(getByText('Th')).toBeInTheDocument();
    expect(getByText('Fr')).toBeInTheDocument();
    expect(getByText('Sa')).toBeInTheDocument();
  });

  it('renders the correct number of days for the month', () => {
    const { getAllByRole } = render(<Calendar date={new Date('2022-03-01')} />);
    const days = getAllByRole('cell').filter(cell => cell.textContent !== '');
    expect(days.length).toBe(31);
  });

  it('highlights the correct date', () => {
    const { getByText } = render(<Calendar date={new Date('2022-03-23')} />);
    const highlightedDate = getByText('23');
    expect(highlightedDate).toHaveStyle('background-color: lightblue');
  });
});
