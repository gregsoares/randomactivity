import React from 'react'
import Card from '../../Components/Card/Card'
import Submenu from '../../Components/Submenu/Submenu'

const Todo = ({ data }) => {
  console.log('cardData= ', data)
  return (
    <section className='' id='todo-page'>
      <Submenu />
      <section className='flex flex-wrap mx-auto my-6'>
        {data.map((cardInfo, index) => (
          <Card cardData={cardInfo} key={index} />
        ))}
      </section>
    </section>
  )
}

export default Todo
