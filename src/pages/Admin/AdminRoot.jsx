import React from 'react'
import Navbar from '../../companents/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../companents/Admin/Footer'

const AdminRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRoot