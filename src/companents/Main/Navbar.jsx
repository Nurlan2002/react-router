import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul><li><Link to='/admin'>Admin Panel</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/employees'>Employees</Link></li>
        <li><Link to='/employeesdetail'>EmployeeDetail</Link></li>
    </ul>
  )
}

export default Navbar