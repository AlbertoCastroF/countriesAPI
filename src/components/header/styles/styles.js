import styled from "styled-components";

const font = "'Nunito Sans', sans-serif";
const backgroundDarkMode = "hsl(209, 23%, 22%)";
const backgroundLightMode = "hsl(0, 0%, 100%)";
const fontDarkMode = "hsl(0, 0%, 100%)";
const fontLightMode = "hsl(200, 15%, 8%)";
const homepageFont = "14px";
const DetailpageFont = "16px";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  font-size: ${homepageFont};
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightMode : backgroundDarkMode};
  color: ${({ lightMode }) => (lightMode ? fontLightMode : fontDarkMode)};
  font-family: ${font};
  box-sizing: border-box;
  box-shadow: 0 0 1px ${backgroundDarkMode};

  @media (min-width: 1200px) {
    font-size: ${DetailpageFont};
  }
`;

export const Title = styled.h3``;

export const DarkModeButton = styled.button`
  font-weight: 600;
  border: none;
  background: transparent;
  color: ${({ lightMode }) => (lightMode ? fontLightMode : fontDarkMode)};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background) GLOBAL: hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background) GLOBAL: hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
