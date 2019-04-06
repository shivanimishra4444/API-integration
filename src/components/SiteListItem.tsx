import * as React from 'react'
import { fetchSingleData } from '../model/Model'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

interface IProps {
  site: { name: string; id: number }
  key: number
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
