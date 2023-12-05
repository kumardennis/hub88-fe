import { Country } from 'graphql/types';
import './styles.css';
import { ApolloError, NetworkStatus } from '@apollo/client';
import { CountriesTableHeader } from 'components/CountriesTableHeader/CountriesTableHeader';
import { CountriesTableBody } from 'components/CountriesTableBody/CountriesTableBody';
import { CountriesFetchStatus } from 'components/CountriesFetchStatus/CountriesFetchStatus';
import { DebouncedFunc } from 'cypress/types/lodash';

type PropTypes = {
  countries: Country[];
  handleQueryChange: DebouncedFunc<(query: string) => Promise<void>>;
  networkStatus: NetworkStatus;
  loading: boolean;
  error: ApolloError | undefined;
};

export const CountriesTable = ({
  countries,
  handleQueryChange,
  networkStatus,
  loading,
  error,
}: PropTypes): JSX.Element => (
  <div className="countries-table-container">
    <table
      className="countries-table"
      role="display-countries"
      aria-describedby="Table to display countries"
    >
      <CountriesTableHeader handleQueryChange={handleQueryChange} />

      <CountriesTableBody countries={countries} />
    </table>

    <div className="fetch-status-container">
      <CountriesFetchStatus
        loading={loading}
        error={error}
        networkStatus={networkStatus}
        noResults={countries.length === 0}
      />
    </div>
  </div>
);
