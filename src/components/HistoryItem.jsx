import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { clearHistory } from '../redux/slices/historySlice'

export const HistoryItem = ({ history }) => {
  const tableHeder = ['Количество вопросов', 'Верных ответов', 'Неверных ответов', 'Сумма баллов', 'Создано', 'Завершено']

  const itemStyle = 'h-[60px] border-r last:border-none my-5 px-8 border-cyan-50 flex justify-center items-center text-xl font-semibold text-white'
  const dispatch = useDispatch()
  return (
    <div className="bg-[#0bab63] py-5 shadow-md my-4 mx-3 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-white text-3xl font-bold my-4 p-4">История игр</h1>
        <Button
          m={5}
          colorScheme="red"
          onClick={() => dispatch(clearHistory())}
        >Очистить историю</Button>
      </div>
      <SimpleGrid minChildWidth="120px" className="rounded-md">
        {
          tableHeder.map(text => (
            <Box
              className="bg-[#0a7a56] h-[80px] border-l border-cyan-50 flex justify-center items-center text-xl font-semibold text-white"
              key={text}
            >{text}</Box>
          ))
        }
      </SimpleGrid>
      {
        history?.map(({ id, games, wins, loses, score, createDate, endDate }) => (
          <SimpleGrid key={id} minChildWidth="120px" className="rounded-md">
            <Box className={itemStyle}>{games}</Box>
            <Box className={itemStyle}>{wins}</Box>
            <Box className={itemStyle}>{loses}</Box>
            <Box className={itemStyle}>{score}</Box>
            <Box className={itemStyle}>{createDate}</Box>
            <Box className={itemStyle}>{endDate}</Box>
          </SimpleGrid>
        ))
      }

    </div>
  )
}

