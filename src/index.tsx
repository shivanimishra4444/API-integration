import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/app'
import Form from './components/Form'
import SiteDetail from './components/SiteDetail'
import Login from './components/Login'
import NavBar from './components/NavBar'
import { AuthenticatedRoute } from './util/Authentication'

const route = (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <AuthenticatedRoute exact path="/" component={App} />
        <AuthenticatedRoute exact path="/add" component={Form} />
        <AuthenticatedRoute exact path="/update/:id" component={Form} />
        <AuthenticatedRoute exact path="/detail/:id" component={SiteDetail} />
      </Switch>
    </Router>
  </div>
)

ReactDOM.render(route, document.getElementById('root'))
