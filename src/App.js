import { Switch, Route } from "react-router";
import HeaderContainer from "./Containers/HeaderContainer";
import Main from "./pages/Main";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/:countryId">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
