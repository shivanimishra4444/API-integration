import axios from 'axios'

const url = 'https://api.staging-cobiro.com/api/v1/site'
const USER_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU0YzkwYzVlZjYwNmM2ODljZjJiNmFmOGIyNzMwOGY2MWZkNTYyZjBlODg3NWFhYzlhYzc5NTlmMzdlZjhkODFjN2ZhMWE0Yjk4ODYwMTI2In0.eyJhdWQiOiIzIiwianRpIjoiZTRjOTBjNWVmNjA2YzY4OWNmMmI2YWY4YjI3MzA4ZjYxZmQ1NjJmMGU4ODc1YWFjOWFjNzk1OWYzN2VmOGQ4MWM3ZmExYTRiOTg4NjAxMjYiLCJpYXQiOjE1NTQ1MzcwNTgsIm5iZiI6MTU1NDUzNzA1OCwiZXhwIjoxNTU3MTI5MDU4LCJzdWIiOiI0ODg5Iiwic2NvcGVzIjpbXX0.CrueqJ-yYDsKQON8fHUnZWN4olL1w_MhKUWmPH5pwNdQZ73CUymquMaXoEGmNL8FxcvT9gS4xzsYmC1gDGOP6DNOgzT69h350NAo68J55sZ6kc2y4BBtZAuOvS6fS4Sm5glkJpRYxT7bKBp-bMOntQB2npIXs0Edr_52U2F02EXEqQrZu35ePoCz1cqYS1eh_gSOuDH3qrtklaPyPdRbsiU9rLLJm82-QzGTUv8jsNAmUlrRRO9eveDQOHqJljA-MjWeTilHGIXsnF8UgzEjpAeVDgVNgv1aMLjeObRbRZN32FLIS2bm5ZYAQGBSciGvsEpSgC-FEdsSKFOTDWIjvhOI_ez-lappNvJic4fw6_-skDJ_E-3udLqQSO-bg0y4JIYq2OCFYNKsfIjXpJI5W0aTDcomwX752B4L5WmqP2cMaAa-rIn65-imBqfHBIDc_bxb-b06LdZLqyP1xfYjHzBLHLKOLzX-HSQIaVwqXLYxEKW2QloqtQ7KbdL4AgMUaQdeHwkjwga9UrOpkmrTSF4brs-1p6ooK1GlniGX8kTvqqKuUZlXqbOb6KY2ddoyaZlMzpO8d_vxIrK3h_lIh5LfrGt-1OqwAyPIjQaYWoprRmSi0Ij4rwB05eCfvYgrNPg3y7mgyY7CpjUxwoEt_KVdsTv6yZiUfmmR6snQpho'
const AuthString = 'Bearer '.concat(USER_TOKEN)
export const fetchData = async () => {
  const getData = await axios.get(url, { headers: { Authorization: AuthString } })
  console.log('data', getData.data.sites)
  return getData.data.sites
}
export const createData = async data => {
  return await axios.post(url, data, { headers: { Authorization: AuthString } })
}

export const fetchSingleData = async id => {
  const getRow = await axios.get(`${url}/${id}`, { headers: { Authorization: AuthString } })
  return getRow.data.site
}

export const updateData = async (id, data) => {
  return await axios.patch(`${url}/${id}`, data, { headers: { Authorization: AuthString } })
}
