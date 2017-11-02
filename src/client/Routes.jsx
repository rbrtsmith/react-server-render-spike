import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import config from '../routesConfig'
import NotFound from '../modules/NotFound'

const Routes = () => (
  <Router>
    <Switch>
      {
        config.map(route => (
      <Route {...route} />
        ))
      }
      <NotFound status={404} />
    </Switch>
  </Router>
)

export default Routes
