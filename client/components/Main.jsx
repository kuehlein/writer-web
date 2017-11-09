'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Home, AllProjects, Web } from './'


const Main = () => {
  <Root>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/projects' component={ AllProjects } />
      <Route exact path='/web' component={ Web } />
      <Redirect to='/' />
    </Switch>
  </Root>
}

export default Main;
