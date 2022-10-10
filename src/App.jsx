import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './pages/Auth'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './pages/Main/MainLayout'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/game/*" element={<MainLayout />} />
    </Routes>

  )
}

export default App
