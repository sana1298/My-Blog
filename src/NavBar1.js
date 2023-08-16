import React from 'react'
import {Link } from 'react-router-dom';

const NavBar1 = () => {
  return (
    <div>
        <nav>
        <h2>My Experiments with life</h2>
        <div className='link'>
        <Link to="/objhome" style={{ padding: 5 }}>
          Blog
          </Link>
        <Link to="/menu" style={{ padding: 5 }}>
          Menu
          </Link>
          <Link to="/service" style={{ padding: 5 }}>
          Service
          </Link> 
        </div>
        </nav>  
        <hr></hr>
    </div>
  )
}

export default NavBar1
