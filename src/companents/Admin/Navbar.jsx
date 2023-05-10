import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <ul>
    <li><Link to='/'>Main Site</Link></li>
    <li><Link to='/admin'>Detail</Link></li>
    <li><Link to='/admin/employ'>emplyee</Link></li>
    <li><Link to='/admin/add'>add new emplyee</Link></li>

   </ul>
  )
}

export default Navbar