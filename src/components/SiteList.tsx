import * as React from 'react'
import { fetchData } from '../model/Model'
import SiteListItem from './SiteListItem'
import ISite from 'types'

interface IState {
  sites: ISite[]
}
export default class SiteList extends React.Component<any, IState> {
  constructor(props) {
    super(props)
    this.state = { sites: [] }
  }
  public async componentDidMount() {
    const sites = await fetchData()
    this.setState({ sites })
  }
  public render() {
    if (!this.state.sites) {
      return
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <ul className="list-group">
              {this.state.sites.map((site: ISite) => (
                <SiteListItem key={site.id} site={site} />
              ))}
            </ul>
          </div>
          <div className="col-2" />
        </div>
      </div>
    )
  }
}
