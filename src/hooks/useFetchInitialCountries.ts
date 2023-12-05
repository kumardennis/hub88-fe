import { LazyQueryExecFunction } from '@apollo/client';
import { CountriesData, CountriesVars } from 'graphql/types';
import { useEffect } from 'react';

export const useFetchInitialCountries = (
  getCountries: LazyQueryExecFunction<CountriesData, CountriesVars>
): void => {
  useEffect(() => {
    getCountries();
  }, []);
};
