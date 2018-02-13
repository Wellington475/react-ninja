import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import About from './components/About'
import TodoApp from './components/TodoApp'

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={TodoApp} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
)

export default Routes
