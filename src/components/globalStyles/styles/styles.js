import { createGlobalStyle } from "styled-components";

const backgroundDarkModeContainer = "hsl(300, 7%, 3%)";
const backgroundLightModeContainer = "hsl(0, 0%, 90%)";

export const GlobalStyles = createGlobalStyle`
   body {
  margin: 0;
  padding: 0;
  background-color: ${({ lightMode }) =>
    lightMode ? backgroundLightModeContainer : backgroundDarkModeContainer};
}
`;
