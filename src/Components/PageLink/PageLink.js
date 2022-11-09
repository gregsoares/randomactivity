import React from 'react'
import { Link } from 'react-router-dom'

const PageLink = ({ text, to }) => {
  return (
    <span className='text-slate-600 italic hover:bg-gray-50 hover:bg-transparent hover:text-blue-600'>
      <Link to={to}> {text}</Link>
    </span>
  )
}

export default PageLink
