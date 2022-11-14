import React from 'react'

const Submenu = () => {
  return (
    <div>
      <div className='mx-auto'>
        <div className='inputs'>
          <div className='flex'>
            <div>
              <lavel>Name</lavel>
              <input className='rounded-md p-1 m-2' type='text' />
            </div>
            <div>
              <lavel>Description</lavel>
              <input className='rounded-md p-1 m-2' type='text' />
            </div>
          </div>
        </div>
        <div className='w-full ' id='controls'>
          <button className='m-2 p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700'>
            Add
          </button>
          <button className='m-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-700'>
            Cancel
          </button>
        </div>
        <div className='first'>Display Results</div>{' '}
      </div>{' '}
    </div>
  )
}

export default Submenu
