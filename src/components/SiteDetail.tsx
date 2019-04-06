import * as React from 'react'
import { Link } from 'react-router-dom'
import ISite from 'types'
import { fetchSingleData } from '../model/Model'

interface IProps {
  match: { params: { id: number } }
  history: { push: (path, state?) => void }
  location: { state: { site: ISite } }
}

export default class SiteDetail extends React.Component<IProps, null> {
  public render() {
    if (this.props.location.state === undefined) {
      return <div>this site doesnt exist</div>
    }
    const {
      location: {
        state: { site }
      }
    } = this.props
    return (
      <Link to={{ pathname: `/update/${site.id}`, state: { site } }}>
        <li>{site.name}</li>
        <li>{site.website}</li>
        <li>{site.platform}</li>
        <li>{site.currency}</li>
        <li>{site.language_code}</li>
      </Link>
    )
  }
}
