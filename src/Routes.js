import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Home from './View/Home'
import workoutA from './View/workoutA'
import Workout from './View/Workout'
import Great from './View/Great'
import About from './View/About'
import Info from './View/Info'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/workout/:type" component={workoutA} />
    <Route exact path="/workout/:type/finished" component={Great} />
    <Route exact path="/workout/:type/:workout" component={Workout} />
    <Route exact path="/about" component={About} />
    <Route exact path="/info" component={Info} />
    <Redirect to="/" />
  </Switch>
)

export default Routes
