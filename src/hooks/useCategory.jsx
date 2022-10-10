import React from 'react'
import { getCategory } from '../api'

const useCategory = (id) => {
  const [prices, setPrices] = React.useState([])

  const getPriceofClues = (category) => {
    const categoryPrice = []
    category?.clues.forEach(clue => {
      if (clue.value) {
        categoryPrice.push(clue.value)
      }
    })
    const uniqNums = [...new Set(categoryPrice)]
    setPrices(uniqNums)
  }

  const getCategoryById = () => {
    const request = getCategory(id)

    request
      .then(res => {
        const data = res.data
        getPriceofClues(data)
      })
  }


  React.useEffect(() => {
    getCategoryById()
  }, [])


  return {
    prices,
  }
}


export const use = useCategory
