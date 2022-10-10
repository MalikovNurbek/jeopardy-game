import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoActive = () => {
  const navigate = useNavigate()
  const goToAuth = () => navigate('/home')
  return (
    <div className="w-full h-screen bg-[#1baf73] flex items-center justify-center">
      <div className="w-[450px] py-10 px-7 bg-white rounded-md shadow-lg flex justify-center flex-col">
        <h1 className="text-2xl text-center mb-4 ">
          Вы не начали игру! </h1>
        <Button
          colorScheme="whatsapp"
          variant="outline"
          onClick={goToAuth}
        >Домой</Button>
      </div>
    </div>
  )
}

