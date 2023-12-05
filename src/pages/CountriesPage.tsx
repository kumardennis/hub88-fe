import { useLazyQuery } from '@apollo/client';
import { GET_COUNTRIES } from 'graphql/queries/countriesQuery';
import { CountriesData, CountriesVars } from 'graphql/types';
import { Suspense, lazy, useState } from 'react';
import { useFetchInitialCountries } from 'hooks/useFetchInitialCountries';
import { debounceFetchCall } from 'utils/debounceFetchCall';
import { TIME_CONST } from 'utils/constants';

const CountriesTable = lazy(() =>
  import('components/CountriesTable/CountriesTable').then((module) => ({
    default: module.CountriesTable,
  }))
);

export const CountriesPage = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const [getCountries, { loading, error, data, networkStatus }] = useLazyQuery<
    CountriesData,
    CountriesVars
  >(GET_COUNTRIES, {
    variables: {
      code: query,
    },
    notifyOnNetworkStatusChange: true,
    pollInterval: TIME_CONST.MINUTE * 30,
  });

  useFetchInitialCountries(getCountries);

  const handleQueryChange = async (query: string) => {
    setQuery(query.toUpperCase());
    debounceFetchCall(() => getCountries());
  };

  return (
    <Suspense fallback={<div>Loading countries...</div>}>
      <CountriesTable
        loading={loading}
        error={error}
        networkStatus={networkStatus}
        handleQueryChange={handleQueryChange}
        countries={data?.countries || []}
      />
    </Suspense>
  );
};
