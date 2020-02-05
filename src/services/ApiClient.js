const getCountries = async () => {
  try {
    const countries = await fetch(process.env.REACT_APP_API_URL);
    return countries.json();
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

export default getCountries;
