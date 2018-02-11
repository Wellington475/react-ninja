import React from 'react'
import Adapter from 'enzyme-adapter-react-15.4'
import { configure, mount, shallow } from 'enzyme'

import About from 'react-ninja/src/components/About'
import App from 'react-ninja/src/components/App'
import TodoApp from 'react-ninja/src/components/TodoApp'


configure({ adapter: new Adapter() })

describe('Integration - Components', () => {
  it('About', () => {
    const wrapper = mount(<About />)
    expect(wrapper.find('h1').text()).toEqual('About')
  })

  it('App', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('.logo').text()).toEqual('React Ninja')
  })

  it('TodoApp', () => {
    const wrapper = shallow(<TodoApp />)
    expect(wrapper.find('.row').length).toEqual(2)
  })
})
