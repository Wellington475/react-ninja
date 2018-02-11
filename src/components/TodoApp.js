import React from 'react'
import Settings from '../containers/Settings'
import TodoList from '../containers/TodoList'

class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <Settings />
        </div>
        <div className='row'>
          <TodoList />
        </div>
      </div>
    )
  }
}

export default TodoApp
