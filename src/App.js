import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route path={route.path} exact={route.exact} key={index}>
              {route.main}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
