import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home Route</h2>
    <Link to="/article">Go To article</Link>
  </div>
)

export default Home
