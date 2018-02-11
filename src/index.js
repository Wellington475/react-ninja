import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'
import About from './containers/About'
import TodoList from './containers/TodoList'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={TodoList} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
  ),
  document.querySelector('#app')
)
