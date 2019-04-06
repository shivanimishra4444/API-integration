import * as React from 'react'
import SiteListItem from '../components/SiteListItem'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
configure({ adapter: new Adapter() })

const ISite = {
  website: 'abc',
  language_code: 'string',
  currency: 'string',
  name: 'string',
  platform: 'string'
}
describe('<SiteListItem />', () => {
  const wrapper = shallow(<SiteListItem key="123" site={ISite} />)

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('render 1 <SiteList> component snapshot', () => {
    expect(wrapper).toHaveLength(1)
  })
})
