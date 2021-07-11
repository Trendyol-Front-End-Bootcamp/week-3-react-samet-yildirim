import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
const App = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/samet">
                <h1>samet</h1>
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
