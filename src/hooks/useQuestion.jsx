import React, { useCallback } from 'react'
import { getQuestion } from '../api'

const useQuestion = (value, categoryId) => {
  const [currentQues, setCurrentQues] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const getSingleQuestion = useCallback(() => {
    if (!value && !categoryId) return

    const request = getQuestion(+value, +categoryId)
    setIsLoading(true)
    request
      .then(res => {
        const data = res.data
        const randomQues = data[Math.floor(Math.random() * data?.length)]
        console.log(randomQues)
        setCurrentQues(randomQues)
      })
      .finally(() => setIsLoading(false))
  }, [value, categoryId])


  React.useEffect(() => {
    getSingleQuestion()
  }, [value, categoryId])

  return {
    currentQues,
    isLoading,

  }
}

export const use = useQuestion
