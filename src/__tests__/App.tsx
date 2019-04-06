import * as React from 'react'
import App from '../components/app'
import * as Adapter from 'enzyme-adapter-react-16'

import { shallow, configure, mount } from 'enzyme'
configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    mount(<App />)
  })

  it('matches snapshot', () => {
    expect(mount(<App />)).toMatchSnapshot()
  })
})
