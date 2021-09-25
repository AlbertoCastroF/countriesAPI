import { GlobalStyles } from "./styles/styles";
import { Context } from "../../Context";
import { useContext } from "react";

export default function GlobalStyle({ children, ...restProps }) {
  const { lightMode } = useContext(Context);
  return (
    <GlobalStyles lightMode={lightMode} {...restProps}>
      {children}
    </GlobalStyles>
  );
}
