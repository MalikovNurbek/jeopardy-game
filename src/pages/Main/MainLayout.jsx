import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import CategoryPage from './CategoryPage'
import { QuestionPage } from './QuestionPage'
import StatisticsPage from './StatisticsPage'

export const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<CategoryPage /> } />
        <Route path="/question/:value/:categoryId" element={<QuestionPage /> } />
        <Route path="/statistics" element={<StatisticsPage/> } />
      </Routes>
    </>
  )
}
