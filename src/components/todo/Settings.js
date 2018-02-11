import React, {PropTypes} from 'react'

const Settings = ({todos, onAdd, onDelete, onList}) => {
  let input

  const handleChange = (event) => {
    event.preventDefault()
    switch (event.target.value) {
      case 'all':
        onList('SHOW_ALL')
        break
      case 'desactive':
        onList('SHOW_COMPLETED')
        break
      case 'active':
        onList('SHOW_ACTIVE')
        break
      default:
        onList('SHOW_ALL')
    }
  }

  return (
    <div>
      <div className='col-md-7'>
        <input className='form-control' type='text' placeholder='Entry Item' ref={node => {
          input = node
        }} />&nbsp;
      </div>
      <div className='col-md-1 text-center'>
        <span className='btn btn-success' onClick={() => {
          if (input.value.length === 0) return

          onAdd(input.value)

          input.value = ''
        }}>Add</span>
      </div>
      <div className='col-md-2 text-center'>
        <select className='form-control' onChange={handleChange}>
          <option value='all'>Todos</option>
          <option value='active'>A fazer</option>
          <option value='desactive'>Feitos</option>
        </select>
      </div>
      <div className='col-md-1 text-center'>
        <span className='btn btn-danger' onClick={onDelete}>Clean</span>
      </div>
    </div>
  )
}

Settings.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default Settings
