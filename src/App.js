import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
const App = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/:id">
                <Character/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
