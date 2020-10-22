import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { GlobalProvider } from "./context/Provider";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
