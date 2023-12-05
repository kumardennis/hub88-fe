import { SearchCountriesByCodeInput } from 'components/SearchCountriesByCodeInput/SearchCountriesByCodeInput';
import { DebouncedFunc } from 'cypress/types/lodash';

type PropTypes = {
  handleQueryChange: DebouncedFunc<(query: string) => Promise<void>>;
};

export const CountriesTableHeader = ({ handleQueryChange }: PropTypes) => (
  <thead>
    <tr>
      <th aria-label="table-header-country-code">
        Code
        <SearchCountriesByCodeInput handleQueryChange={handleQueryChange} />
      </th>
      <th aria-label="table-header-country-name">Name</th>
    </tr>
  </thead>
);
