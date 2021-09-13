import React from "react";
import {
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Home from "./View/Home";
import workoutA from "./View/workoutA";
import workoutB from "./View/workoutB";
import Workout from './View/Workout'

const Routes = () => (
  
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/workout/a" component={workoutA}></Route>
      <Route exact path="/workout/a/:workout" component={Workout}></Route>
      <Route exact path="/workout/b" component={workoutB}></Route>
      <Route exact path="/workout/b/:workout" component={Workout}></Route>

      <Redirect to="/" />
    </Switch>
);

export default Routes