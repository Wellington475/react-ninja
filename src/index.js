import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import About from './components/About'
import TodoApp from './components/TodoApp'

import todoApp from './reducers/index'

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={TodoApp} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>
  ),
  document.querySelector('#app')
)
