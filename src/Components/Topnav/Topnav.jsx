import React, { useState } from 'react'

const Topnav = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdown = () => {
    console.log('handleDropdown: ', isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-900'>
      <div className='relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <a href='https://flowbite.com' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Random Activity App
          </span>
        </a>
        <div className='flex items-center md:order-2'>
          <button
            onClick={handleDropdown}
            data-collapse-toggle='mega-menu'
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mega-menu'
            aria-expanded={isOpen}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          hidden={!isOpen}
          id='mega-menu'
          className='bg-gray-900 justify-between items-center w-full text-sm md:flex md:w-auto md:order-1 absolute top-12 md:relative md:top-0'
        >
          <ul className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'>
            <li>
              <a
                href='/'
                className='block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Home
              </a>
            </li>
            {/* Mega menu placeholder */}
            <li>
              <a
                href='/todo'
                className='block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Todo
              </a>
            </li>
            <li>
              <a
                href='/test'
                className='block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Test
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Topnav
