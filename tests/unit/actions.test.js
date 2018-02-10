import * as actions from 'react-ninja/src/actions/index'

describe('Utils - Actions', () => {
  it('Add Todo', () => {
    const text = "Item 1"
    const expectedAction = {
      type: 'ADD_TODO',
      id: 1,
      text: text,
      completed: false
    }

    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('Set Visibility Filter', () => {
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    }

    expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual(expectedAction)
  })

  it('Toggle Todo', () => {
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 42
    }

    expect(actions.toggleTodo(42)).toEqual(expectedAction)
  })
})
