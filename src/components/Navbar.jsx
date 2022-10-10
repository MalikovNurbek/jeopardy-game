import { Tab, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="bg-[#0a7a56] w-full sticky top-0 py-2 flex border-b-4 z-10">
      <NavLink style={({ isActive }) => {
        return isActive ? { backgroundColor: '#0bab63' } : null
      }} className="w-full text-xl py-3 inline-block text-center text-white" to="/game">Игра</NavLink>
      <NavLink style={({ isActive }) => {
        return isActive ? { backgroundColor: '#0bab63' } : null
      }} className="w-full text-xl py-3 inline-block text-center text-white" to="/game/statistics">Статистика</NavLink>
    </div>
  )
}

