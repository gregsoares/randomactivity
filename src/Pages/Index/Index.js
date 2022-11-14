import React from 'react'
import Card from '../../Components/Card/Card'
import randomCardData from '../../assets/randomCardData'

const Index = () => {
  const [list, setList] = React.useState(randomCardData)
  const handleAdd25 = () => {
    setList([...list, ...randomCardData.slice(0, 25)])
  }
  console.log('randomCardData', randomCardData)
  return (
    <div className='w-full min-h-full mx-auto bg-slate-400'>
      <div>
        <div>
          <p className='m-2'>Number of cards: {list.length}</p>
        </div>
        <span className='flex'>
          <button
            onClick={handleAdd25}
            id='add25'
            className='p-1 m-2 bg-slate-500 hover:bg-gray-300 rounded-md'
          >
            Add 25
          </button>
        </span>
      </div>
      <section id='card-deck' className='grid grid-cols-2 md:grid-cols-4 '>
        {list.map(card => (
          <Card title={card.title} text={card.text} />
        ))}
      </section>
    </div>
  )
}
export default Index
