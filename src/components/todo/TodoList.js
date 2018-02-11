import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onToggleSelect }) => (
  <div>
    <ul className='list-group'>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          onClick={() => onToggleSelect(todo.id)}
          {... todo}
        />
      ))}
    </ul>
  </div>
)

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default TodoList
