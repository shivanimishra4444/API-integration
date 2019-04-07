import * as React from 'react'
import { Link } from 'react-router-dom'
import { removeAuth } from '../util/Authentication'

function NavBar() {
  function logO() {
    removeAuth()
    this.props.history.push(`/login`)
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Cobiro
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Site List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Create Site
            </Link>
          </li>
        </ul>
      </div>
      <div className="form-inline">
        <Link className="btn btn-secondary" onClick={logO} to="/login">
          Log Out
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
