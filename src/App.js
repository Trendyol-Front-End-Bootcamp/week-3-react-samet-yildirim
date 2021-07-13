import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div className="appWrapper">
      <Router>
          <Switch>
            <Route path="/character/:id">
                <Character/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
