import { connect } from 'react-redux'

import Settings from '../components/todo/Settings'
import { addTodo, cleanTodo, setVisibilityFilter } from '../actions'

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: () => dispatch(cleanTodo()),
    onAdd: (text) => dispatch(addTodo(text)),
    onList: (type) => dispatch(setVisibilityFilter(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
