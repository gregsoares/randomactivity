import React from 'react'

const Index = () => {
  return (
    <div className='w-full min-h-full mx-auto bg-slate-400'>
      <div>
        <div>
          <p className='m-2'>Number of cards: </p>
        </div>
        <span className='flex'>
          <button
            id='add25'
            className='p-1 m-2 bg-slate-500 hover:bg-gray-300 rounded-md'
          >
            Add 25
          </button>
        </span>
      </div>
      <section id='card-deck' className='grid grid-cols-6'></section>
    </div>
  )
}
export default Index
