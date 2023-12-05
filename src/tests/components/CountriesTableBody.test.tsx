import React from 'react';
import { render, screen } from '@testing-library/react';
import { CountriesTableBody } from 'components/CountriesTableBody/CountriesTableBody';

describe('CountriesTableBody', () => {
  it('renders "No results!" when countries array is empty', () => {
    render(<CountriesTableBody countries={[]} />);
    expect(screen.getByText('No results!')).toBeInTheDocument();
  });

  it('renders table rows for each country', () => {
    const mockCountries = [
      { code: 'US', name: 'United States' },
      { code: 'CA', name: 'Canada' },
    ];

    render(<CountriesTableBody countries={mockCountries} />);
    const rows = screen.getAllByRole('row');

    expect(rows).toHaveLength(mockCountries.length);
    expect(screen.getByLabelText('US')).toHaveTextContent('US');
    expect(screen.getByLabelText('Canada')).toHaveTextContent('Canada');
  });
});
