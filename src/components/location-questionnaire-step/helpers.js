export const normalizeCountry = ({ slug, title }) => ({ value: slug, title });

export const denormalizeCountry = ({ value, title }) => ({
  slug: value,
  title,
});

export const normalizeCity = ({ slug, title, ...rest }) => ({
  value: slug,
  title,
  ...rest,
});

export const denormalizeCity = ({ value, title, ...rest }) => ({
  slug: value,
  title,
  ...rest,
});

export const getCityListByCountry = (cityList, country) => {
  if (!country) {
    return cityList;
  }

  return cityList.filter(({ countrySlug }) => countrySlug === country.slug);
};

export const getCountryByCity = (countryList, city) =>
  countryList.find(({ slug }) => city.countrySlug === slug) || null;
