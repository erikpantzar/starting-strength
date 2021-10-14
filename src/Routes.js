<<<<<<< HEAD
import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Home from "./View/Home";
import workoutA from "./View/workoutA";
import Workout from "./View/Workout";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/workout/:type" component={workoutA} />
    <Route exact path="/workout/:type/:workout" component={Workout} />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
=======
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
      <Route exact path="/" component={Home}/>
      <Route exact path="/workout/a" component={workoutA}/>
      <Route exact path="/workout/a/:workout" component={Workout}/>
      <Route exact path="/workout/b" component={workoutB}/>
      <Route exact path="/workout/b/:workout" component={Workout}/>

      <Redirect to="/" />
    </Switch>
);

export default Routes
>>>>>>> 891365c23367985f7fabca8342b0966127a0084e
