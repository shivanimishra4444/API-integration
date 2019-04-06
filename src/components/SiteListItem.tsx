import * as React from 'react'

interface IProps {
  site: { name: string }
  key: number
}
export default class SiteListItem extends React.Component<IProps, any> {
  render() {
    return <div>{this.props.site.name}</div>
  }
}
