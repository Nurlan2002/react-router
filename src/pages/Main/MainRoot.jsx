import React from 'react'
import Navbar from '../../companents/Main/Navbar'
import Footer from '../../companents/Main/Footer'
import { Outlet } from 'react-router-dom'

const MainRoot = () => {
  return (
  <><Navbar/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default MainRoot