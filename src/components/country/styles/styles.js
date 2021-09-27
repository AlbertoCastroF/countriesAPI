import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

const font = "'Nunito Sans', sans-serif";
const backgroundDarkModeContainer = "hsl(300, 7%, 3%)";
const backgroundDarkMode = "hsl(209, 23%, 22%)";
const backgroundLightMode = "hsl(0, 0%, 100%)";
const backgroundLightModeContainer = "hsl(0, 0%, 90%)";
const placeholder = "hsl(0, 0%, 52%)";
const fontDarkMode = "hsl(0, 0%, 100%)";
const fontLightMode = "hsl(200, 30%, 8%)";
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
  margin-top: 0.5rem;
  font-size: ${homepageFont};
  font-family: ${font};
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightModeContainer : backgroundDarkModeContainer};
  box-sizing: border-box;

  @media (min-width: 1200px) {
    font-size: ${DetailpageFont};
  }
`;

export const SearchBar = styled.input`
  width: 90%;
  height: 2rem;
  margin: 1rem 0;
  text-align: left;
  padding: 1em;
  padding-left: 2rem;
  color: ${({ lightMode }) => (lightMode ? fontLightMode : fontDarkMode)};
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightMode : backgroundDarkMode};

  ::placeholder {
    color: ${({ lightMode }) => (lightMode ? placeholder : fontDarkMode)};
  }

  @media (min-width: 1000px) {
    width: 500px;
    margin-left: 4rem;
  }
`;

export const Card = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightMode : backgroundDarkMode};
  color: ${({ lightMode }) => (lightMode ? fontLightMode : fontDarkMode)};
  margin: 0.5rem;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 20%;
    margin: 1rem;
    box-sizing: border-box;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: auto;
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 0;
  color: ${fontDarkMode}
  text-align: left;
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
`;

export const Text = styled.span`
  font-weight: 600;
`;

export const Select = styled.select`
  width: 200px;
  height: 4rem;
  margin: 1rem 0;
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightMode : backgroundDarkMode};
  text-align: left;
  padding: 1em;
  color: ${({ lightMode }) => (lightMode ? fontLightMode : fontDarkMode)};
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;

  ::placeholder {
    color: ${fontDarkMode};
  }

  @media (min-width: 1000px) {
    margin-right: 4rem;
  }
`;

export const Option = styled.option`
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CountryContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    flex-direction: initial;
    justify-content: space-evenly;
  }
`;

export const Link = styled(ReactRouterLink)``;
