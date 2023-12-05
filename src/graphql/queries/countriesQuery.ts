import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Countries($code: String) {
    countries(filter: { code: { regex: $code } }) {
      code
      name
    }
  }
`;
