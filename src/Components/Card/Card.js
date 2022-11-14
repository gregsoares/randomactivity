import React from 'react'
const Card = ({ title, text }) => {
  return (
    <div className='text-sm flex flex-col m-1 p-2 bg-slate-300 shadow-md rounded-md'>
      <div className='text-center text-xl p-2'>{title}</div>
      <p className='rounded-sm'>{text}</p>
      <div className='flex flex-wrap justify-around my-2' id='controls'>
        <button className='shadow-md p-2 mx-2 bg-teal-600 hover:bg-teal-400 rounded-md'>
          Complete
        </button>
        <button className='shadow-md p-2 mx-2 bg-gray-600 hover:bg-gray-400 rounded-md text-slate-300'>
          Archive
        </button>
      </div>
    </div>
  )
}

export default Card
