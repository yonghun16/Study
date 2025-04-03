import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from './MainHeader'

const RootElement = () => {
  return (
    <div>
      <MainHeader />
      <p>This is  root</p>
      <Outlet />
    </div>
  )
}

export default RootElement
