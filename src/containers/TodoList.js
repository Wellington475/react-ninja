import { connect } from 'react-redux'

import TodoList from '../components/todo/TodoList'
import { toggleTodo } from '../actions'

const filterTodo = (todos, type) => {
  switch (type) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.completed === false)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed === true)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodo(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => ({
  onToggleSelect: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
