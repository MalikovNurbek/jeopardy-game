import { Button, Flex, FormControl, IconButton, Input, Progress, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { GrCaretNext } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByAmount, incrementByAmount } from '../../redux/slices/scoreSlice'
import { Hook } from '../../hooks'
import { onFalseAnswer, onTrueAnswer } from '../../redux/slices/statisticSlice'
import { Loader } from '../../components/Loader'
import { NoActive } from '../../components/noActive'
import { setLastResult } from '../../redux/slices/lastResultSlice'

export const QuestionPage = () => {
  const dispatch = useDispatch()
  const { value, categoryId } = useParams()

  const [time, setTime] = React.useState(60)
  const [finishGame, setFinishGame] = React.useState(false)
  const [isTrueAnswer, setIsTrueAnswer] = React.useState(false)
  const isActive = useSelector(state => state.isActive.value)
  const navigate = useNavigate()
  const {
    currentQues,
  } = Hook.useQuestion.use(value, categoryId)


  const {
    register,
    handleSubmit,
    getValues,
  } = useForm()

  const onSubmit = (data) => {
    if (data.text.toUpperCase() === currentQues.answer.toUpperCase()) {
      dispatch(incrementByAmount(value))
      dispatch(onTrueAnswer(+value))
      setIsTrueAnswer(true)
      dispatch(setLastResult({ isTrue: true, value }))
    } else {
      dispatch(decrementByAmount(value))
      dispatch((onFalseAnswer(+value)))
      dispatch(setLastResult({ isTrue: false, value }))
      setIsTrueAnswer(false)
    }
    setFinishGame(true)
  }
  const goToCategory = () => navigate(-1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    if (time === 0) {
      dispatch(decrementByAmount(value))
      dispatch((onFalseAnswer(+value)))
      dispatch(setLastResult({ isTrue: false, value }))
      setIsTrueAnswer(false)
      setFinishGame(true)
    }
  }, [time])

  if (!isActive) return <NoActive/>
  return (
    <div className="w-full h-screen bg-[#1baf73] flex items-center justify-center">
      <div className="w-[600px] h-[350px] bg-white shadow-xl rounded-2xl flex flex-col justify-between p-5">
        {
          finishGame ?
            <div className="w-full h-[100%] flex flex-col justify-between">
              <h3 className="text-3xl text-center">Правильный ответ:
              </h3>

              <Flex className="flex-col">
                <Text className="text-emerald-600 text-3xl text-center font-bold py-3 inline-block">{currentQues?.answer} </Text>
                <Text
                  className="text-2xl text-center font-bold py-3 inline-block"
                >Ваш ответ: {getValues('text') ? getValues('text') : 'Нет ответа'}
                </Text>
              </Flex>
              {
                isTrueAnswer ?
                  <Text className="text-emerald-600 text-2xl mx-5 text-center">+{value}$</Text> :
                  <Text className="text-rose-700 text-2xl mx-5 text-center ">-{value}$</Text>
              }
              <Flex className="justify-center items-center">
                <Button
                  colorScheme="telegram"
                  mx={5}
                  onClick={goToCategory}
                >Назад в категорию</Button>
              </Flex>
            </div> :

            <div className="flex flex-col justify-between w-full h-screen">
              <Progress value={1.667 * time} my={2} />
              {
                currentQues ? <h3 className="text-3xl whitespace-pre-line">{currentQues?.question}</h3> : <Loader/>
              }
              <form onSubmit={handleSubmit(onSubmit)} className="flex">
                <FormControl>
                  <Input
                    autoFocus={true}
                    placeholder="Ваш ответ"
                    {...register('text', { required: true })}
                  />
                </FormControl>
                <IconButton onClick={handleSubmit(onSubmit)} colorScheme="whatsapp" icon={<GrCaretNext/>} className="ml-2"/>
              </form>
            </div>
        }

      </div>
    </div>
  )
}


