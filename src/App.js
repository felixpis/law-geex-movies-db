import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

const Root = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <Root>
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </Root>
  );
}

export default App;
