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
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <div>
              <span className="h2">Site Detail</span>
            </div>
            <div className="card text-white bg-success mb-3">
              <div className="card-header">
                <span className="h4">{site.name}</span>
                <Link className="btn btn-primary float-right" to={{ pathname: `/update/${site.id}`, state: { site } }}>
                  Edit
                </Link>
              </div>
              <div className="card-body">
                <h4 className="card-title">{site.website}</h4>
                <p className="card-text">
                  <strong>Platform: </strong>
                  {site.platform}
                </p>
                <p className="card-text">
                  <strong>Currency: </strong>
                  {site.currency}
                </p>
                <p className="card-text">
                  <strong>Language: </strong>
                  {site.language_code}
                </p>
              </div>
            </div>
          </div>
          <div className="col-3" />
        </div>
      </div>
    )
  }
}
