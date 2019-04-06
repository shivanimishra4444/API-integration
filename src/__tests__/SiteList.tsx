import * as React from 'react'
import SiteList from '../components/SiteList'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
configure({ adapter: new Adapter() })

describe('<SiteList />', () => {
  const wrapper = mount(<SiteList />)

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('render 1 <SiteList> component snapshot', () => {
    expect(wrapper).toHaveLength(1)
  })
})
