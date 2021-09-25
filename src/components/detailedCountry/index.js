import {
  Container,
  Card,
  Title,
  Flag,
  CountryInfo,
  Population,
  Region,
  Capital,
  Text,
  NativeName,
  SubRegion,
  TopLevelDomain,
  Currencies,
  Languages,
  BorderButton,
  BorderCountries,
  Link,
  InfoContainer,
  TagsContainer,
  CountryInfoContainer,
  BorderCountriesContainer,
  LinkHome,
  BackButton,
} from "./styles/styles";

export default function DetailedCountry({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

DetailedCountry.Card = function DetailedCountryCard({
  children,
  ...restProps
}) {
  return <Card {...restProps}>{children}</Card>;
};

DetailedCountry.Title = function DetailedCountryTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

DetailedCountry.Flag = function DetailedCountryFlag({
  children,
  ...restProps
}) {
  return <Flag {...restProps}>{children}</Flag>;
};

DetailedCountry.CountryInfo = function DetailedCountryCountryInfo({
  children,
  ...restProps
}) {
  return <CountryInfo {...restProps}>{children}</CountryInfo>;
};

DetailedCountry.Population = function DetailedCountryPopulation({
  children,
  ...restProps
}) {
  return <Population {...restProps}>{children}</Population>;
};

DetailedCountry.Region = function DetailedCountryRegion({
  children,
  ...restProps
}) {
  return <Region {...restProps}>{children}</Region>;
};

DetailedCountry.Capital = function DetailedCountryCapital({
  children,
  ...restProps
}) {
  return <Capital {...restProps}>{children}</Capital>;
};

DetailedCountry.Text = function DetailedCountryText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>;
};

DetailedCountry.NativeName = function DetailedCountryNativeName({
  children,
  ...restProps
}) {
  return <NativeName {...restProps}>{children}</NativeName>;
};

DetailedCountry.SubRegion = function DetailedCountrySubRegion({
  children,
  ...restProps
}) {
  return <SubRegion {...restProps}>{children}</SubRegion>;
};

DetailedCountry.TopLevelDomain = function DetailedCountryTopLevelDomain({
  children,
  ...restProps
}) {
  return <TopLevelDomain {...restProps}>{children}</TopLevelDomain>;
};

DetailedCountry.Currencies = function DetailedCountryCurrencies({
  children,
  ...restProps
}) {
  return <Currencies {...restProps}>{children}</Currencies>;
};

DetailedCountry.Languages = function DetailedCountryLanguages({
  children,
  ...restProps
}) {
  return <Languages {...restProps}>{children}</Languages>;
};

DetailedCountry.BorderButton = function DetailedCountryBorderButton({
  children,
  ...restProps
}) {
  return <BorderButton {...restProps}>{children}</BorderButton>;
};

DetailedCountry.BackButton = function DetailedCountryBackButton({
  children,
  ...restProps
}) {
  return <BackButton {...restProps}>{children}</BackButton>;
};

DetailedCountry.BorderCountries = function DetailedCountryBorderCountries({
  children,
  ...restProps
}) {
  return <BorderCountries {...restProps}>{children}</BorderCountries>;
};

DetailedCountry.Link = function DetailedCountryLink({
  children,
  ...restProps
}) {
  return <Link {...restProps}>{children}</Link>;
};

DetailedCountry.LinkHome = function DetailedCountryLinkHome({
  children,
  ...restProps
}) {
  return <LinkHome {...restProps}>{children}</LinkHome>;
};

DetailedCountry.InfoContainer = function DetailedCountryInfoContainer({
  children,
  ...restProps
}) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

DetailedCountry.CountryInfoContainer =
  function DetailedCountryCountryInfoContainer({ children, ...restProps }) {
    return (
      <CountryInfoContainer {...restProps}>{children}</CountryInfoContainer>
    );
  };

DetailedCountry.BorderCountriesContainer =
  function DetailedCountryBorderCountriesContainer({ children, ...restProps }) {
    return (
      <BorderCountriesContainer {...restProps}>
        {children}
      </BorderCountriesContainer>
    );
  };

DetailedCountry.TagsContainer = function DetailedCountryTagsContainer({
  children,
  ...restProps
}) {
  return <TagsContainer {...restProps}>{children}</TagsContainer>;
};
