import React from 'react'
import { Route, Switch } from 'react-router'

import config from '../routesConfig'
import NotFound from '../modules/NotFound'

const Routes = () => (
  <Switch>
    { config.map(r => <Route {...r} />) }
    <NotFound status={404} />
  </Switch>
)

export default Routes
