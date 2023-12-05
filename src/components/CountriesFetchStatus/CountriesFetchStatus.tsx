import { NetworkStatus, ApolloError } from '@apollo/client';

type PropTypes = {
  networkStatus: NetworkStatus;
  loading: boolean;
  error: ApolloError | undefined;
};

export const CountriesFetchStatus = ({
  networkStatus,
  loading,
  error,
}: PropTypes): JSX.Element => {
  if (networkStatus === NetworkStatus.refetch) return <p>Fetching!</p>;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! : {error.message}</p>;

  return <></>;
};
