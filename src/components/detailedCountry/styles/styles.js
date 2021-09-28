import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

const font = "'Nunito Sans', sans-serif";
const backgroundDarkModeContainer = "hsl(300, 7%, 3%)";
const backgroundDarkMode = "hsl(209, 23%, 22%)";
const backgroundLightMode = "hsl(0, 0%, 100%)";
const backgroundLightModeContainer = "hsl(0, 0%, 90%)";
const fontDarkMode = "hsl(0, 0%, 100%)";
const fontLightMode = "hsl(200, 15%, 8%)";
const homepageFont = "14px";
const DetailpageFont = "16px";

export const Container = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: ${homepageFont};
  font-family: ${font};
  background-color: ${({ $lightMode }) =>
    $lightMode ? backgroundLightModeContainer : backgroundDarkModeContainer};

  box-sizing: border-box;

  @media (min-width: 1200px) {
    font-size: ${DetailpageFont};
  }
`;

export const Card = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  color: ${({ $lightMode }) => ($lightMode ? fontLightMode : fontDarkMode)};
  margin: 1rem;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-top: 0;
  color: ${fontDarkMode}
  text-align: left;

  @media (min-width: 1200px) {
    width: 100%;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  padding-top: 1rem;
  padding-bottom: 0;
  text-align: left;
`;

export const Population = styled.p`
  margin: 0.5em 0;
`;

export const Region = styled.p`
  margin: 0.5em 0;
`;

export const Capital = styled.p`
  margin: 0.5em 0;
  margin-bottom: 2rem;
`;

export const NativeName = styled.p`
  margin: 0.5em 0;
`;
export const SubRegion = styled.p`
  margin: 0.5em 0;
`;
export const TopLevelDomain = styled.p`
  margin: 0.5em 0;
`;
export const Currencies = styled.p`
  margin: 0.5em 0;
`;
export const Languages = styled.p`
  margin: 0.5em 0;
`;

export const BorderCountries = styled.h3`
  margin: 0.5em 0;
`;

export const LinkHome = styled(ReactRouterLink)`
  color: ${({ $lightMode }) => ($lightMode ? fontLightMode : fontDarkMode)};
  font-size: 16px;
  text-decoration: none;
`;

export const Link = styled(ReactRouterLink)`
  color: ${({ $lightMode }) => ($lightMode ? fontLightMode : fontDarkMode)};
  text-decoration: none;
`;

export const BorderButton = styled.button`
  width: auto;
  height: auto;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: ${({ $lightMode }) =>
    $lightMode ? backgroundLightMode : backgroundDarkMode};
  margin: 0.5rem;
`;

export const BackButton = styled.button`
  width: 110px;
  height: auto;
  padding: 0.5em 1em;
  border: none;
  background-color: ${({ $lightMode }) =>
    $lightMode ? backgroundLightMode : backgroundDarkMode};
  color: ${({ $lightMode }) => ($lightMode ? fontLightMode : fontDarkMode)};
  margin: 0;
  margin: 2rem 0.5rem;
  align-self: start;
  box-shadow: 0 0 5px 0px ${fontLightMode};

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const Text = styled.span`
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const CountryInfoContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    width: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;

export const BorderCountriesContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export const TagsContainer = styled.div`
  width: 330px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    justify-content: space-evenly;
  }
`;
