import { Country } from 'graphql/types';

type PropTypes = {
  countries: Country[];
};

export const CountriesTableBody = ({ countries }: PropTypes) => {
  if (countries.length === 0) return <p>No results!</p>;

  return (
    <tbody aria-describedby="Table body for Countries">
      {countries.map(({ code, name }) => (
        <tr role="row" key={code}>
          <td aria-label={code}>{code}</td>
          <td aria-label={name}>{name}</td>
        </tr>
      ))}
    </tbody>
  );
};
