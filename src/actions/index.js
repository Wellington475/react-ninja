let idx = 0

/**
 * addTodo - Add new Item
 * @param {string} text
 */
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: ++idx,
    completed: false,
    text
  }
}

/**
 * setVisibilityFilter - Filter by
 * @param {string} filter #e.g. 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED' 
 */
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

/**
 * toggleTodo - Change visibility
 * @param {number} id
 */
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
