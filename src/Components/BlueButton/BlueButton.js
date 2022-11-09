import React from 'react'
import PageLink from '../PageLink/PageLink'

const BlueButton = ({ text, to, href }) => {
  const button = (
    <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
      <PageLink to={to} text={text} />
    </span>
  )
  const link = (
    <a
      href={href}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
    >
      {text}
    </a>
  )
  return { to } ? button : link
}

export default BlueButton
