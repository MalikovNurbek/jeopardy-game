import { BaseUrl } from '../configs'

export const getClues = () => {
  return BaseUrl.get('/api/clues')
}

export const getCategoryes = (count = 6) => {
  return BaseUrl.get(`/api/categories?count=${count}`)
}

export const getRandomQuestion = () => {
  return BaseUrl.get('/api/random')
}

export const getCategory = (id) => {
  return BaseUrl.get(`/api/category?id=${id}`)
}

export const getQuestion = (value, categoryId) => {
  return BaseUrl.get(`/api/clues?value=${value}&category=${categoryId}&offset=1`)
}
