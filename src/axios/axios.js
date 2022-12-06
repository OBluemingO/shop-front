import axios from 'axios'

const customInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": '*',
    // 'Access-Control-Allow-Method': 'GET',
  },
})

customInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  }
  return config
})

export default customInstance
