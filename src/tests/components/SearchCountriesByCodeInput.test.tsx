import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchCountriesByCodeInput } from 'components/SearchCountriesByCodeInput/SearchCountriesByCodeInput';

describe('SearchCountriesByCodeInput', () => {
  it('renders correctly with initial query', () => {
    render(
      <SearchCountriesByCodeInput
        handleQueryChange={async () => {
          return;
        }}
      />
    );
    const inputElement = screen.getByRole('search-countries-by-code');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'US' } });

    expect(inputElement).toHaveValue('US');
  });

  it('calls handleQueryChange on input change', async () => {
    const handleQueryChangeMock = jest.fn();
    render(
      <SearchCountriesByCodeInput handleQueryChange={handleQueryChangeMock} />
    );
    const inputElement = screen.getByRole('search-countries-by-code');

    userEvent.type(inputElement, 'CA');

    expect(handleQueryChangeMock).toHaveBeenCalledTimes(2); // Called once for each character typed
  });

  it('respects maxLength property', async () => {
    const handleQueryChangeMock = jest.fn();

    render(
      <SearchCountriesByCodeInput handleQueryChange={handleQueryChangeMock} />
    );
    const inputElement = screen.getByRole('search-countries-by-code');

    // Attempt to type 'ABC'
    userEvent.type(inputElement, 'ABC');
    expect(inputElement).toHaveValue('AB');
  });
});
