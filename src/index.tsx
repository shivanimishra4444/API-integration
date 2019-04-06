import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/app'
import Form from './components/Form'
import SiteDetail from './components/SiteDetail'

const route = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/add" component={Form} />
      <Route path="/update/:id" component={Form} />
      <Route path="/detail/:id" component={SiteDetail} />
    </Switch>
  </Router>
)

ReactDOM.render(route, document.getElementById('root'))
