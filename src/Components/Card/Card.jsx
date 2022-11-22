import React from 'react'
const Card = ({ cardData }) => {
  const { activity, type, participants, price, link } = cardData
  const showPrice = () => {
    if (price === 0) {
      return 'Free'
    } else if (!price) {
      return 'N/A'
    }
    return price
  }
  return (
    <div className='text-sm flex flex-col m-1 p-2 bg-slate-300 shadow-md rounded-md'>
      <div className='text-center text-xl p-2'>{activity}</div>

      <span className='flex justify-evenly'>
        <p className='m-1 rounded-lg text-sm text-gray-600'>
          {' '}
          Price <span className='text-gray-900'>{showPrice()}</span>{' '}
        </p>
        {type && (
          <p className='m-1 rounded-lg text-sm text-gray-600'>
            {' '}
            Type <span className='text-gray-900'>{type}</span>{' '}
          </p>
        )}
        {participants && (
          <p className='m-1 rounded-lg text-sm text-gray-600'>
            {' '}
            Participants <span className='text-gray-900'>
              {participants}
            </span>{' '}
          </p>
        )}
      </span>

      {link && (
        <p className='m-1 rounded-lg text-sm text-gray-600'>
          {' '}
          Link <span className='text-gray-900'>{link}</span>{' '}
        </p>
      )}
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
