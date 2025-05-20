import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link to="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link to="/products" className="text-gray-700 hover:text-blue-600">
        Products
      </Link>
      <Link to="/categories" className="text-gray-700 hover:text-blue-600">
        Categories
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600">
        About
      </Link>
    </nav>
  )
}