import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './routes'
import todoApp from './reducers/index'

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={store}>
    <Routes />
  </Provider>
  ),
  document.querySelector('#app')
)
