import * as React from 'react'
import { authenticate } from '../util/Authentication'
import { withRouter } from 'react-router'

interface IState {
  email?: string
  password?: string
}
interface IProps {
  history: { push: (path, state?) => void }
}
class Login extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const authenticationSuccess = await authenticate(this.state.email, this.state.password)
    if (authenticationSuccess) {
      this.props.history.push(`/`)
    } else {
      alert('Authentication Failure')
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input value={this.state.email} onChange={this.handleChange} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input value={this.state.password} onChange={this.handleChange} type="password" id="password" className="form-control" placeholder="Password" required />
              <button disabled={!this.validateForm} className="btn btn-lg btn-primary btn-block" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
