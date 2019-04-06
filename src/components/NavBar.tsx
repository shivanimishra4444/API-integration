import * as React from 'react'
import { Link } from 'react-router-dom'
import { removeAuth } from '../util/Authentication'

function NavBar() {
  function logO() {
    removeAuth()
    this.props.history.push(`/login`)
  }
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Cobiro
      </Link>
      <Link className="btn btn-success" onClick={logO} to="/login">
        Log Out
      </Link>
    </nav>
  )
}

export default NavBar
