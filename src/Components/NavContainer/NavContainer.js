import React from 'react'

const NavContainer = () => {
  return (
    <li>
      <button
        id='mega-menu-dropdown-button'
        data-dropdown-toggle='mega-menu-dropdown'
        className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
      >
        Company{' '}
        <svg
          aria-hidden='true'
          className='ml-1 w-5 h-5 md:w-4 md:h-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <div
        id='mega-menu-dropdown'
        className='grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700'
        data-popper-reference-hidden=''
        data-popper-escaped=''
        data-popper-placement='bottom'
      >
        <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
          <ul className='space-y-4' aria-labelledby='mega-menu-dropdown-button'>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Library
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Pro Version
              </a>
            </li>
          </ul>
        </div>
        <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
          <ul className='space-y-4'>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Playground
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                License
              </a>
            </li>
          </ul>
        </div>
        <div className='p-4 text-gray-900 dark:text-white'>
          <ul className='space-y-4'>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default NavContainer
