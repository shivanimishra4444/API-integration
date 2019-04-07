import * as React from 'react'
import { createData, updateData } from '../model/Model'
import ISite from 'types'

const fields = {
  WEBSITE: 'website',
  LANG_CODE: 'language_code',
  CURRENCY: 'currency',
  NAME: 'name',
  PLATFORM: 'platform'
}

interface IState {
  website?: string
  language_code?: string
  currency?: string
  name?: string
  platform?: string
  id?: number
  status?: boolean
}
interface IProps {
  history: { push: (path, state?) => void }
  location: { state: { site: ISite } }
}
export default class Form extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = { website: '', language_code: '', currency: '', name: '', platform: '', status: false }
  }

  public componentDidMount = async () => {
    if (this.props.location.state !== undefined) {
      const { website, language_code, currency, name, platform, id } = this.props.location.state.site
      this.setState({ website, language_code, currency, name, platform, id })
    }
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            {this.state.status ? (
              <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  &times;
                </button>
                <h4 className="alert-heading">Well Done!</h4>
                <p className="mb-0">Site have been successfully updated.</p>
              </div>
            ) : (
              <div />
            )}

            <div>
              <span className="h3">Site</span>
              <input className="btn btn-info float-right" type="button" value="Go to Site List" onClick={this.handleBack} />
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor={fields.NAME}>Site Name</label>
                <input value={this.state.name} name={fields.NAME} onChange={this.handleChange} type="text" className="form-control" id={fields.NAME} placeholder="Enter Name" />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website Url</label>
                <input value={this.state.website} name={fields.WEBSITE} onChange={this.handleChange} type="text" className="form-control" id="website" placeholder="Enter Website" />
              </div>

              <div className="form-group">
                <label htmlFor={fields.LANG_CODE}>Language</label>
                <select className="form-control" value={this.state.language_code} name={fields.LANG_CODE} onChange={this.handleChange} id={fields.LANG_CODE}>
                  <option>de</option>
                  <option>no</option>
                  <option>sv</option>
                  <option>en</option>
                  <option>ch</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor={fields.CURRENCY}>Currency</label>
                <select className="form-control" value={this.state.currency} name={fields.CURRENCY} onChange={this.handleChange} id={fields.CURRENCY}>
                  <option>DKK</option>
                  <option>NOK</option>
                  <option>SEK</option>
                  <option>USD</option>
                  <option>GBP</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor={fields.PLATFORM}>Platform</label>
                <select className="form-control" value={this.state.platform} name={fields.PLATFORM} onChange={this.handleChange} id={fields.PLATFORM}>
                  <option>woocomerce</option>
                  <option>pestashop</option>
                  <option>wordpress</option>
                  <option>shopify</option>
                  <option>custom</option>
                </select>
              </div>

              <input className="btn btn-primary" type="button" value="Submit" onClick={this.handleSubmit} />
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    )
  }
  private handleChange = (event: React.FormEvent<EventTarget>): void => {
    let target = event.target as HTMLInputElement
    this.setState({ [target.name]: target.value })
  }
  private handleBack = () => {
    this.props.history.push('/')
  }

  private handleSubmit = async event => {
    const { website, currency, name, language_code, platform } = this.state

    const json = {
      currency,
      website,
      name,
      language_code,
      platform
    }
    const response = this.state.id ? await updateData(this.state.id, json) : await createData(json)
    if (response.data.status === 'success') {
      this.setState({ status: true })
    }
    event.preventDefault()
  }
}
