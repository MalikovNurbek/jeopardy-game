import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeActive } from '../redux/slices/activeGameSlice'
import { addHistory } from '../redux/slices/historySlice'
import { clearStatistic } from '../redux/slices/statisticSlice'


export const GameStatistic = ({ statistic, score: totalScore }) => {
  const { id, games, wins, loses, score, createDate } = statistic && statistic
  const username = localStorage.getItem('username')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const finishGame = () => {
    dispatch(addHistory({ ...statistic, endDate: new Date().toLocaleString() }))
    dispatch(changeActive(false))
    dispatch(clearStatistic())
    navigate('/home')
  }

  const goToCategory = () => navigate('/game')
  const tableHeder = ['Количество вопросов', 'Верных ответов', 'Неверных ответов', 'Сумма баллов', 'Создано', 'Действия']
  const itemStyle = 'h-[60px] border-r last:border-none my-5 px-8 border-cyan-50 flex justify-center items-center text-xl font-semibold text-white'

  return (
    <div className="bg-[#0bab63] py-5 shadow-md my-4 mx-3 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-white text-3xl font-bold my-4 p-4">Текущая игра</h1>
        <h1 className="text-white text-3xl font-bold my-4 p-4">игрок: {username}</h1>
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

      <SimpleGrid key={id} minChildWidth="120px" className="rounded-md">
        <Box className={itemStyle}>{games}</Box>
        <Box className={itemStyle}>{wins}</Box>
        <Box className={itemStyle}>{loses}</Box>
        <Box className={itemStyle}>{score}</Box>
        <Box className={itemStyle}>{createDate}</Box>
        {
          statistic.games ?
            <Box className={itemStyle}>
              <Button
                colorScheme="red"
                onClick={finishGame}
              >Завершить</Button>

              <Button
                colorScheme="whatsapp"
                onClick={goToCategory}
              >Продолжить</Button>
            </Box> : <Box className={itemStyle}></Box>
        }

      </SimpleGrid>

      <h1 className="text-white text-3xl font-bold my-4 p-4 ">Ваши очки:
        <span className={+totalScore < 0 ? 'text-red-700 ml-5' : 'text-cyan-50 ml-5'}>{totalScore}</span>
      </h1>


    </div>
  )
}

