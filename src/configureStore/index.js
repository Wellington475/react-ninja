import { createStore } from 'redux'

import {loadState, saveState} from '../localStorage'
import todoApp from '../reducers/index'

const configureStore = () => {
  let store = createStore(
    todoApp,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  })

  return store
}

export default configureStore
