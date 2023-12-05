import { Country } from 'graphql/types';
import './styles.css';
import { ApolloError, NetworkStatus } from '@apollo/client';
import { CountriesTableHeader } from 'components/CountriesTableHeader/CountriesTableHeader';
import { CountriesTableBody } from 'components/CountriesTableBody/CountriesTableBody';
import { CountriesFetchStatus } from 'components/CountriesFetchStatus/CountriesFetchStatus';

type PropTypes = {
  countries: Country[];
  handleQueryChange: (query: string) => Promise<void>;
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

    <CountriesFetchStatus
      loading={loading}
      error={error}
      networkStatus={networkStatus}
    />
  </div>
);
