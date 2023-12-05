import { ApolloClient, InMemoryCache } from '@apollo/client';
import { graphqlApiUri } from 'utils/constants';

export const client = new ApolloClient({
  uri: graphqlApiUri,
  cache: new InMemoryCache(),
  name: 'Hub88-FE',
  version: '1.0',
});
