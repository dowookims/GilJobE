import axios from 'axios'
const BASE_URL = 'http://52.78.29.170:8000/api/'

export default {
  getStationRoutes: (id) => {
    return new Promise(async (resolve, reject) => {
      const res = await axios.get(BASE_URL)
      const API = res.data
      resolve(axios.get(`${API.stations}${id}/routes/`))
    })
  },
  getAllStation: () =>
    new Promise(async (resolve, reject) => {
      const res = await axios.get(BASE_URL)
      const API = res.data
      resolve(axios.get(`${API.stations}?all`))
    })
}
