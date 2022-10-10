import { Button, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CategoryUtem } from '../../components/CategoryUtem'
import { NoActive } from '../../components/noActive'
import { Hook } from '../../hooks'
import { changeActive } from '../../redux/slices/activeGameSlice'

const CategorySkeleton = () => {
  const arr = [1, 2, 4, 5, 6]
  return (
    <div className="w-full h-screen bg-[#1baf73] box-border py-5 px-6">
      {
        arr.map(num => (
          <div key={num} className="w-full flex items-center justify-between my-8">
            <Skeleton height="80px" className="w-[339px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
            <Skeleton height="80px" className="w-[149px] mr-30 last:m-0"/>
          </div>
        ))
      }

    </div>
  )
}

const CategoryPage = () => {
  const {
    categoryes,
  } = Hook.useCategoryPage.use()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isActive = useSelector((state) => state.isActive.value)
  const { isTrue, value } = useSelector((state) => state.lastResult)
  const onFinishGame = () => {
    dispatch(addHistory({ ...statistic, endDate: new Date().toLocaleString() }))
    dispatch(changeActive(false))
    navigate('/home')
  }

  if (!isActive) return <NoActive/>
  if (!categoryes.length) return <CategorySkeleton/>
  return (
    <div className="w-full h-screen bg-[#1baf73] box-border">
      <h1 className="text-white text-2xl p-3">Выберите цену </h1>
      <div>
        {
          categoryes?.map(category => (
            <CategoryUtem key={category.title} category={category} />
          ))
        }
        <div className="flex items-center justify-between py-5 px-6">
          <div className={`w-[60%] h-[100%] ${ isTrue ? 'bg-[#d4edda]' : 'bg-[#fda4af]'} py-2 px-2 rounded-lg flex justify-between`}>
            {
              value !== 0 ?
                <>
                  <span className="text-2xl">{isTrue ? 'Ответ правильный' : 'Неверный ответ'}</span>
                  <span className="text-2xl">{value}</span>
                </> : null
            }


          </div>
          <Button
            colorScheme="red"
            onClick={onFinishGame}
          >Завершить игру</Button>
        </div>
      </div>

    </div>
  )
}

export default CategoryPage
