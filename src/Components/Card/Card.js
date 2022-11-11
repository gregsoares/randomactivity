import React from 'react'
import PageLink from '../PageLink/PageLink'
const Card = ({ title, text }) => {
  return (
    <div className='flex flex-col m-1 p-2 bg-slate-300 shadow-sm rounded-md max-w-xs'>
      <div className='text-center text-2xl'>{title}</div>
      <p className='text-xl rounded-sm'>{text}</p>
      <div className='flex flex-wrap justify-around' id='controls'>
        <PageLink text='Complete' /> <PageLink to='/' text='Cancel' />
      </div>
    </div>
  )
}

export default Card
