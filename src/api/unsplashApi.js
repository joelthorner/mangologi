import axios from 'axios'

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})