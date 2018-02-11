import React from 'react'

const Todo = ({onClick, text, completed}) => (
  <li
    className={completed ? 'list-group-item text-danger' : 'list-group-item'}
    onClick={onClick}
    style={{cursor: 'pointer'}}>
    {text} | {completed ? 'Feito' : 'A fazer'}
  </li>
)

export default Todo
