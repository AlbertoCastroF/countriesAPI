import { createGlobalStyle } from "styled-components";

const backgroundDarkModeContainer = "hsl(207, 26%, 17%)";
const backgroundLightModeContainer = "hsl(0, 0%, 90%)";

export const GlobalStyles = createGlobalStyle`
   body {
  margin: 0;
  padding: 0;
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightModeContainer : backgroundDarkModeContainer};
}
`;
