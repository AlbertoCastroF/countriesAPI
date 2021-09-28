import { useContext } from "react";
import { Context } from "../Context";
import { Country } from "../components";

function Main() {
  const { data, input, handleOnInput, location, handleOnLocation, lightMode } =
    useContext(Context);
  return (
    <Country lightMode={lightMode}>
      <Country.SearchContainer>
        <Country.SearchBar
          lightMode={lightMode}
          value={input}
          onChange={handleOnInput}
          placeholder="🔍  Search for a county..."
        />
        <Country.Select
          lightMode={lightMode}
          value={location}
          name="location"
          onChange={handleOnLocation}
        >
          <Country.Option value="All">All countries</Country.Option>
          <Country.Option value="Africa">Africa</Country.Option>
          <Country.Option value="Americas">America</Country.Option>
          <Country.Option value="Asia">Asia</Country.Option>
          <Country.Option value="Europe">Europe</Country.Option>
          <Country.Option value="Oceania">Oceania</Country.Option>
        </Country.Select>
      </Country.SearchContainer>
      <Country.CountryContainer>
        {data.map((item, i) => (
          <Country.Card lightMode={lightMode} key={i}>
            <Country.Link to={`/${item.alpha2Code}`}>
              <Country.Flag src={item.flags.svg} alt={`${item.name} flag`} />
            </Country.Link>
            <Country.CountryInfo>
              <Country.Title>{item.name}</Country.Title>
              <Country.Population>
                <Country.Text>Population: </Country.Text>
                {item.population}
              </Country.Population>
              <Country.Region>
                <Country.Text>Region: </Country.Text>
                {item.region}
              </Country.Region>
              <Country.Capital>
                <Country.Text>Capital: </Country.Text>
                {item.capital}
              </Country.Capital>
            </Country.CountryInfo>
          </Country.Card>
        ))}
      </Country.CountryContainer>
    </Country>
  );
}

export default Main;
