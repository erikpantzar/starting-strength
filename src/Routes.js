import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Home from "./View/Home";
import workoutA from "./View/workoutA";
import workoutB from "./View/workoutB";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/workout/A" component={workoutA}></Route>
      <Route path="/workout/B" component={workoutB}></Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes