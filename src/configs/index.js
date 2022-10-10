import axios from 'axios'


const baseURL = 'http://jservice.io/'

export const BaseUrl = axios.create({
  baseURL,
})
