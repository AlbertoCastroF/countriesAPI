import {
  Container,
  Card,
  Title,
  Flag,
  CountryInfo,
  Population,
  Region,
  Capital,
  SearchBar,
  Text,
  Select,
  Option,
  SearchContainer,
  CountryContainer,
  Link,
} from "./styles/styles";

export default function Country({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Country.Card = function CountryCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Country.Title = function CountryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Country.Flag = function CountryFlag({ children, ...restProps }) {
  return <Flag {...restProps}>{children}</Flag>;
};

Country.CountryInfo = function CountryCountryInfo({ children, ...restProps }) {
  return <CountryInfo {...restProps}>{children}</CountryInfo>;
};

Country.Population = function CountryPopulation({ children, ...restProps }) {
  return <Population {...restProps}>{children}</Population>;
};

Country.Region = function CountryRegion({ children, ...restProps }) {
  return <Region {...restProps}>{children}</Region>;
};

Country.Capital = function CountryCapital({ children, ...restProps }) {
  return <Capital {...restProps}>{children}</Capital>;
};

Country.SearchBar = function CountrySearchBar({ children, ...restProps }) {
  return <SearchBar {...restProps}>{children}</SearchBar>;
};

Country.Text = function CountryText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Country.Link = function CountryLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Country.Select = function CountrySelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Country.Option = function CountryOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Country.CountryContainer = function CountryCountryContainer({
  children,
  ...restProps
}) {
  return <CountryContainer {...restProps}>{children}</CountryContainer>;
};

Country.SearchContainer = function CountrySearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};
