import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container navbar-title">
        <Link to="/" className='title'>
          <h2>Feedback UI</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header