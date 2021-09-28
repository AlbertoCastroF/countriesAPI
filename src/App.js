import { Switch, Route } from "react-router";
import HeaderContainer from "./Containers/HeaderContainer";
import Main from "./pages/Main";
import Details from "./pages/Details";

//I only display on of two pages, main or details. I use useParams for the different countries display. Header is always displayed.
function App() {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/countriesAPI">
          <Main />
        </Route>
        <Route path="/:countryId">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
