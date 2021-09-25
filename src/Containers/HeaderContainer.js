import { Header } from "../components";
import { Context } from "../Context";
import { useContext } from "react";

function HeaderContainer() {
  const { lightMode, handleOnClick } = useContext(Context);
  return (
    <Header lightMode={lightMode}>
      <Header.Title>Where in the world?</Header.Title>
      <Header.DarkModeButton lightMode={lightMode} onClick={handleOnClick}>
        <i
          style={{ marginRight: "1rem", fontSize: "1rem" }}
          className="fas fa-moon"
        ></i>
        {lightMode ? "Dark mode" : "Light Mode"}
      </Header.DarkModeButton>
    </Header>
  );
}

export default HeaderContainer;
