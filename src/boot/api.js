import axios from 'axios'
const API_URL = 'https://www.sdpcompany.ru/api/'

const api = axios.create({
  baseURL: API_URL
})

export default api
