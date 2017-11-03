import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Article from './Article'
import Books from './Books'
import NotFound from './NotFound'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/article" component={Article} exact />
    <Route path="/books" component={Books} exact />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
