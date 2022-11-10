import React from 'react'
import PageLink from '../PageLink/PageLink'

const Submenu = () => {
  return (
    <div>
      <div className='mx-auto'>
        <div className='inputs'>
          <div className='flex'>
            <div>
              <lavel>Name</lavel>
              <input type='text' />
            </div>
            <div>
              <lavel>Description</lavel>
              <input type='text' />
            </div>
          </div>
        </div>
        <div id='controls'>
          <PageLink text='Add' /> <PageLink to='/' text='Cancel' />
        </div>
        <div className='first'>Display Results</div>{' '}
      </div>{' '}
    </div>
  )
}

export default Submenu
