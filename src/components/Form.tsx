import * as React from 'react'
import { createData, fetchSingleData, updateData } from '../model/Model'

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
}
interface IProps {
  match: { params: { id: number } }
}
export default class Form extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = { website: '', language_code: '', currency: '', name: '', platform: '' }
  }

  public componentDidMount = async () => {
    let response
    const {
      match: {
        params: { id }
      }
    } = this.props
    if (id) {
      response = await fetchSingleData(id)
      const { website, language_code, currency, name, platform } = response
      this.setState({ website, language_code, currency, name, platform })
    }
  }

  public render() {
    return (
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
  private handleChange = (event: React.FormEvent<EventTarget>): void => {
    let target = event.target as HTMLInputElement
    this.setState({ [target.name]: target.value })
  }

  private handleSubmit = event => {
    const { website, currency, name, language_code, platform } = this.state
    const {
      match: {
        params: { id }
      }
    } = this.props
    const json = {
      currency,
      website,
      name,
      language_code,
      platform
    }
    if (id) {
      updateData(id, json)
    } else {
      createData(json)
    }
    event.preventDefault()
  }
}
