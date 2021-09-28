import { useContext } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import { DetailedCountry } from "../components";

function Details() {
  const { countryId } = useParams();
  const { backupData, lightMode } = useContext(Context);
  const country = backupData.filter((item) => item.alpha2Code === countryId)[0];
  return (
    backupData && (
      <DetailedCountry $lightMode={lightMode}>
        <DetailedCountry.Card $lightMode={lightMode}>
          <DetailedCountry.BackButton $lightMode={lightMode}>
            <DetailedCountry.LinkHome $lightMode={lightMode} to="/countriesAPI">
              <i
                style={{ marginRight: "1rem", fontSize: "1rem" }}
                className="fas fa-arrow-left"
              ></i>
              Back
            </DetailedCountry.LinkHome>
          </DetailedCountry.BackButton>
          <DetailedCountry.InfoContainer>
            <DetailedCountry.Flag src={country.flags.svg} />
            <DetailedCountry.CountryInfoContainer>
              <DetailedCountry.CountryInfo>
                <div>
                  <DetailedCountry.Title>{country.name}</DetailedCountry.Title>
                  <DetailedCountry.NativeName>
                    <DetailedCountry.Text>Native name: </DetailedCountry.Text>
                    {country.nativeName}
                  </DetailedCountry.NativeName>
                  <DetailedCountry.Population>
                    <DetailedCountry.Text>Population: </DetailedCountry.Text>
                    {country.population}
                  </DetailedCountry.Population>
                  <DetailedCountry.Region>
                    <DetailedCountry.Text>Region: </DetailedCountry.Text>
                    {country.region}
                  </DetailedCountry.Region>
                  <DetailedCountry.Region>
                    <DetailedCountry.Text>Sub region: </DetailedCountry.Text>
                    {country.subregion}
                  </DetailedCountry.Region>
                  <DetailedCountry.Capital>
                    <DetailedCountry.Text>Capital: </DetailedCountry.Text>
                    {country.capital}
                  </DetailedCountry.Capital>
                </div>
                <div>
                  <DetailedCountry.TopLevelDomain>
                    <DetailedCountry.Text>
                      Top Level Domain:{" "}
                    </DetailedCountry.Text>
                    {country.topLevelDomain}
                  </DetailedCountry.TopLevelDomain>
                  <DetailedCountry.Currencies>
                    <DetailedCountry.Text>Currencies: </DetailedCountry.Text>
                    {country.currencies ? (
                      country.currencies[0].name
                    ) : (
                      <DetailedCountry.Text>No currencies</DetailedCountry.Text>
                    )}
                  </DetailedCountry.Currencies>
                  <DetailedCountry.Languages>
                    <DetailedCountry.Text>Languages: </DetailedCountry.Text>
                    {country.languages.map((item) => `${item.name}, `)}
                  </DetailedCountry.Languages>
                </div>
              </DetailedCountry.CountryInfo>
              <DetailedCountry.BorderCountriesContainer>
                <DetailedCountry.BorderCountries>
                  Border Countries:
                </DetailedCountry.BorderCountries>
                <DetailedCountry.TagsContainer>
                  {country.borders ? (
                    backupData.map(
                      (item, i) =>
                        country.borders.includes(item.alpha3Code) && (
                          <DetailedCountry.BorderButton
                            $lightMode={lightMode}
                            key={i}
                          >
                            <DetailedCountry.Link
                              $lightMode={lightMode}
                              to={`/${item.alpha2Code}`}
                            >
                              {item.name}
                            </DetailedCountry.Link>
                          </DetailedCountry.BorderButton>
                        )
                    )
                  ) : (
                    <DetailedCountry.BackButton $lightMode={lightMode}>
                      No border countries
                    </DetailedCountry.BackButton>
                  )}
                </DetailedCountry.TagsContainer>
              </DetailedCountry.BorderCountriesContainer>
            </DetailedCountry.CountryInfoContainer>
          </DetailedCountry.InfoContainer>
        </DetailedCountry.Card>
      </DetailedCountry>
    )
  );
}

export default Details;
