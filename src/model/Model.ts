import axios from 'axios'
import { getAccessToken } from '../util/Authentication'

const url = 'https://api.staging-cobiro.com/api/v1/site'
const AuthString = () => 'Bearer '.concat(getAccessToken())
export const fetchData = async () => {
  const getData = await axios.get(url, { headers: { Authorization: AuthString() } })
  return getData.data.sites
}
export const createData = data => {
  return axios.post(url, data, { headers: { Authorization: AuthString() } })
}

export const fetchSingleData = async id => {
  const getRow = await axios.get(`${url}/${id}`, { headers: { Authorization: AuthString() } })
  return getRow.data.site
}

export const updateData = (id, data) => {
  const response = axios.patch(`${url}/${id}`, data, { headers: { Authorization: AuthString() } })
  return response
}
