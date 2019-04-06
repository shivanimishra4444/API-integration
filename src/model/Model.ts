import axios from 'axios'

const url = 'https://api.staging-cobiro.com/api/v1/site'
const USER_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxODA1OWY1YTczMmRkMDFiN2E3YjMwMGRmZDM2NWIyY2JhZGI3ZGRlN2EzMmY3ZGE3OTBlMTQ2ODFlYzQwMmNkZGQxZWQxOWM0MjBjMWRjIn0.eyJhdWQiOiIzIiwianRpIjoiNjE4MDU5ZjVhNzMyZGQwMWI3YTdiMzAwZGZkMzY1YjJjYmFkYjdkZGU3YTMyZjdkYTc5MGUxNDY4MWVjNDAyY2RkZDFlZDE5YzQyMGMxZGMiLCJpYXQiOjE1NTQ1NjcyMTMsIm5iZiI6MTU1NDU2NzIxMywiZXhwIjoxNTU3MTU5MjEzLCJzdWIiOiI0ODg5Iiwic2NvcGVzIjpbXX0.jkF-N1Q_Vc9r4zsBg6oZCGu35Th4eKd2BLQRXiKIers_Nr_n7nUC776uG0Ju6finPu8JkWU6wmHLNSJViUtfS-Rri-XH1q-IFx2YYw2RF-xnG74R0fHGLA_7V_w-XfIMhl9AerQN5lS1wxSrSKWoC5cirZToMeCqa_uGbpC8f-pZKufYKCCH5r-KsgQ0hdvf2cxruKnueMQHQDFrRGP-7pQQ8bdCvc4R0XnMM65Ikn_l70UZYkhpwAbloD_4fmHWhq76epkyv8_SzUGEcPd8Lpubdvu6YlQ1v5QnSvcHMByg7nrnPqhhkN_8a7HdcFFxI0DV-aI9xV08rctSaMGkV4afp8ufBSw18e0O-xaoSOxyIsBEJ5a0aJ_y02l1yAMmIrEepFVps5m79FxGBAOOJNGpZngJKq1r81mbKjGZgSJjgFMB6_lpPAJTUP61phGvD4q2MC4Nz3cxmQ7F5PZsr6cmti3D-hvS9PkyIitO3PnfzYvZtyaYKbri_N-Y-7TOCaWmvbOW78YR8HqGweNlh2oA8tTxs0rxPgKs8SNwcoUnsX2Fgs50rdK6beMGmDE7ewX-x8N36SUtj3VS8fzEa2IbnRLsDRCq90lGdnZhLaK1TrgRDkQxWO-rIkYm-SjIZXKVmt41UHHI7Y1LPSKjoO8lw90qI6OkfHY-6zytTW0'
const AuthString = 'Bearer '.concat(USER_TOKEN)
export const fetchData = async () => {
  const getData = await axios.get(url, { headers: { Authorization: AuthString } })
  console.log('data', getData.data.sites)
  return getData.data.sites
}
export const createData = data => {
  return axios.post(url, data, { headers: { Authorization: AuthString } })
}

export const fetchSingleData = async id => {
  const getRow = await axios.get(`${url}/${id}`, { headers: { Authorization: AuthString } })
  return getRow.data.site
}

export const updateData = (id, data) => {
  const response = axios.patch(`${url}/${id}`, data, { headers: { Authorization: AuthString } })
  return response
}
