import * as React from 'react'
import * as Cookies from 'js-cookie'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Login from '../components/Login'

export const getAccessToken = () => Cookies.get('access_token')
export const isAuthenticated = () => !!getAccessToken()
const loginurl = 'https://api.staging-cobiro.com/api/v1/login'

export const authenticate = async (email: string, password: string) => {
  return await axios
    .post(loginurl, { email: email, password: password })
    .then((tokens: any) => {
      //refresh token can be configured as well
      Cookies.set('access_token', tokens.data.access_token, { expires: tokens.data.expires_in })
      return true
    })
    .catch(error => {
      console.error('Login failed', error)
      return false
    })
}

export const removeAuth = () => {
  Cookies.remove('access_token')
}

export const AuthenticatedRoute = ({ component: Component, exact, path }) => <Route exact={exact} path={path} render={props => (this.isAuthenticated() ? <Component {...props} /> : <Login />)} />
