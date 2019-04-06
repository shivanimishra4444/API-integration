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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {fields.WEBSITE}:
            <input type="text" value={this.state.website} name={fields.WEBSITE} onChange={this.handleChange} />
          </label>
          <label>
            {fields.LANG_CODE}:
            <input type="text" value={this.state.language_code} name={fields.LANG_CODE} onChange={this.handleChange} />
          </label>
          <label>
            {fields.CURRENCY}:
            <input type="text" value={this.state.currency} name={fields.CURRENCY} onChange={this.handleChange} />
          </label>
          <label>
            {fields.NAME}:
            <input type="text" value={this.state.name} name={fields.NAME} onChange={this.handleChange} />
          </label>
          <label>
            {fields.PLATFORM}:
            <input type="text" value={this.state.platform} name={fields.PLATFORM} onChange={this.handleChange} />
          </label>
          <input type="button" value="Submit" onClick={this.handleSubmit} />
          <input type="button" value="Main Page" onClick={this.handleBack} />
        </form>
        {this.state.status ? <div>site has been added/updated successfully</div> : <div />}
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
