import todos from 'react-ninja/src/reducers/todos'
import * as actions from 'react-ninja/src/actions/index'
import visibilityFilter from 'react-ninja/src/reducers/visibilityFilter'

describe('Utils - Reducers', () => {
  it('Add Todo', () => {
    const text = "Item 1"
    const todoBefore = []
    const todoAfter = [{
      id: 1,
      text: text,
      completed: false
    }]

    expect(todos(todoBefore, actions.addTodo(text))).toEqual(todoAfter)
  })

  it('Toggle Todo', () => {
    const idx = 42
    const todoBefore = [{
      id: idx,
      text: "Item 42",
      completed: false
    }]

    const todoAfter = [{
      id: idx,
      text: "Item 42",
      completed: true
    }]

    expect(todos(todoBefore, actions.toggleTodo(idx))).toEqual(todoAfter)
  })

  it('Visibility Filter', () => {
    const state      = 'SHOW_ALL'
    const stateAfter = 'SHOW_ACTIVE'

    expect(visibilityFilter(state, actions.setVisibilityFilter('SHOW_ACTIVE'))).toEqual(stateAfter)
  })
})