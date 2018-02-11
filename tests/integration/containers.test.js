import React from 'react'
import Adapter from 'enzyme-adapter-react-15.4'
import { configure, mount } from 'enzyme'

import About from 'react-ninja/src/containers/About'

configure({ adapter: new Adapter() })

describe('Integration - Containers', () => {
  it('About', () => {
    const wrapper = mount(<About />)
    expect(wrapper.find('h1').text()).toEqual('About')
  })
})
