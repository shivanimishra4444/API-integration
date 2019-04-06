import * as React from 'react'
import { Link } from 'react-router-dom'
import ISite from 'types'

interface IProps {
  site: ISite
}
export default class SiteListItem extends React.Component<IProps, any> {
  public render() {
    return (
      <Link to={`/update/${this.props.site.id}`}>
        <li>{this.props.site.name}</li>
      </Link>
    )
  }
}
