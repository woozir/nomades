import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/main.css";
import Home from "./views/Home";
import User from "./views/User";

function App() {
  return (
    <Router>
      <div className="App mx">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/:username">
              <User />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
