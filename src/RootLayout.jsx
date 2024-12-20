import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
