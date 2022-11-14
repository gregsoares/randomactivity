import React from 'react'

const pathName = window.location.pathname

const Test = () => {
  return (
    <div>
      Test <p className='text-xl'>pathname: {pathName}</p>{' '}
    </div>
  )
}

export default Test
