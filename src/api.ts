import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
})

export const API_ROUTES = {
  meditations: '/meditations',
}
