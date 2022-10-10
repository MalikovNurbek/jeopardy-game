import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Hook } from '../hooks'

export const CategoryUtem = ({ category }) => {
  const { title, id } = category
  const navigate = useNavigate()
  const {
    prices,
  } = Hook.useCategory.use(id)

  const goToQuiestions = (value, categoryId) => {
    navigate(`/game/question/${value}/${categoryId}`)
  }

  return (
    <div className="border bg-[#1baf73] py-5 px-6 my-2 w-full">

      <SimpleGrid columns={10} spacing={10}>
        <Box className="bg-[#0a7a56] text-white h-[80px] flex justify-center items-center rounded-lg hover:bg-[#055e42] cursor-pointer50 font-bold col-span-2" key={id}>{title}</Box>

        {
          prices.map(price => (
            <Box
              className="bg-[#0a7a56] text-white h-[80px] flex justify-center items-center rounded-lg hover:bg-[#055e42] cursor-pointer"
              key={price}
              onClick={() => goToQuiestions(price, id)}
            >{price}</Box>
          ))
        }
      </SimpleGrid>
    </div>
  )
}
