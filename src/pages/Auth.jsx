import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const {
    register,
    handleSubmit,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('username', data.username)
    navigate('/home')
  }

  return (
    <div className="w-full h-screen bg-[#0bab63] flex items-center justify-center">
      <div className="w-[500px]  rounded-lg bg-white p-6">
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <FormControl className="text-center">
            <FormLabel>Ваше имя</FormLabel>
            <Input placeholder="Введите ваше имя" {...register('username', { required: true, minLength: 3 })}/>
            <Button
              colorScheme="whatsapp"
              my={4}
              onClick={handleSubmit(onSubmit)}>Играть</Button>
          </FormControl>
        </form>
      </div>
    </div>
  )
}


