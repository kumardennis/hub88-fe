export type Country = {
  code: string;
  name: string;
};

export type CountriesData = {
  countries: Country[];
};

export type CountriesVars = {
  code?: string;
};
