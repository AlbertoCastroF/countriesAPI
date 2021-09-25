import { Container, Title, DarkModeButton } from "./styles/styles";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.DarkModeButton = function HeaderDarkModeButton({
  children,
  ...restProps
}) {
  return <DarkModeButton {...restProps}>{children}</DarkModeButton>;
};
