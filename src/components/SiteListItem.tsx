import * as React from 'react'
import { Link } from 'react-router-dom'
import ISite from 'types'

interface IProps {
  site: ISite
}
export default class SiteListItem extends React.Component<IProps, any> {
  public render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.site.name}

        <Link className="btn btn-success" to={{ pathname: `/detail/${this.props.site.id}`, state: { site: this.props.site } }}>
          Detail
        </Link>
      </li>
    )
  }
}
