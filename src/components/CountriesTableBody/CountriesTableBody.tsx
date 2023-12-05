import { Country } from 'graphql/types';

type PropTypes = {
  countries: Country[];
};

export const CountriesTableBody = ({ countries }: PropTypes) => (
  <tbody aria-describedby="Table body for Countries">
    {countries.map(({ code, name }) => (
      <tr role="row" key={code}>
        <td aria-label={code}>{code}</td>
        <td aria-label={name}>{name}</td>
      </tr>
    ))}
  </tbody>
);
