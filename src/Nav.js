import React from 'react'
import {Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
        <h1>Welcome To My Page</h1>
      <nav style={{ margin: 10 }}>
          <Link to="/home" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
      </nav>
    </div>
  )
}

export default Nav
