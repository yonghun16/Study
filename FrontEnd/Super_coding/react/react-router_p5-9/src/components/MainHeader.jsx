import React from 'react'
import { NavLink } from 'react-router-dom'

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li> <NavLink to='/welcome'>Welcome</NavLink> </li>
          <li> <NavLink to='/products'>Products</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
