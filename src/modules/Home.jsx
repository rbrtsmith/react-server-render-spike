import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home Route</h2>
    <Link to="/article">Go To Article</Link>
    <div>
      <Link to="/books">Go To Books</Link>
    </div>
  </div>
)

export default Home
