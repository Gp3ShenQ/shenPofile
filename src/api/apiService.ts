import axios from 'axios'

const apiService = axios.create({
  baseURL: (window as any).webconfig.url,
})

export { apiService }

export default apiService
