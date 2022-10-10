import React, { useCallback } from 'react'
import { getCategory } from '../api'

const useCategoryPage = () => {
  const [categoryes, setCategoryes] = React.useState([])

  const categoryesId = [17, 22, 4, 5, 9]

  const getAllCategoryes = useCallback(() => {
    categoryesId.forEach(id => {
      const request = getCategory(id)

      request
        .then(res => {
          const data = res.data
          setCategoryes(categoryes => [...categoryes, data])
        })
    })
  }, [])

  React.useEffect(() => {
    getAllCategoryes()
  }, [])

  return {
    categoryes,
  }
}


export const use = useCategoryPage
