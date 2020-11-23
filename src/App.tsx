import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/main.css";
import Home from "./views/Home";
import User from "./views/User";
const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
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
    </ReactQueryCacheProvider>
  );
}

export default App;
