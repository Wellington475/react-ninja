const addTodo = (action) => {
  return {
    id: action.id,
    text: action.text,
    completed: false
  }
}

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        addTodo(action)
      ]

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) return todo
        return toggleTodo(todo)
      })

    case 'DELETE':
      return []

    default:
      return state
  }
}

export default todos
