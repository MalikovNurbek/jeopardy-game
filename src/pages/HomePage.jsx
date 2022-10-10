import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NoAccess } from '../components/NoAccess'
import { changeActive } from '../redux/slices/activeGameSlice'
import { createStatistic } from '../redux/slices/statisticSlice'

export const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isActive = useSelector((state) => state.isActive.value)
  const username = localStorage.getItem('username')
  const onStartGame = () => {
    dispatch(changeActive(true))
    dispatch(createStatistic())
    navigate('/game')
  }
  const logout = () => {
    localStorage.removeItem('username')
    navigate('/')
  }


  if (!username) return <NoAccess/>

  return (
    <div className="w-full h-screen bg-[#0bab63] flex justify-center items-center">
      <Button onClick={onStartGame}>Начать игру</Button>
      <Button
        colorScheme="red"
        ml={5}
        onClick={logout}
      >Выйти из игры</Button>
    </div>
  )
}

