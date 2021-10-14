import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Home from './View/Home'
import workoutA from './View/workoutA'
import Workout from './View/Workout'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/workout/:type" component={workoutA} />
    <Route exact path="/workout/:type/:workout" component={Workout} />

    <Redirect to="/" />
  </Switch>
)

export default Routes
