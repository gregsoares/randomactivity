import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Submenu from '../../Components/Submenu/Submenu'
import { ListContext } from '../../App'

const Todo = () => {
  const context = useContext(ListContext)
  console.log('context', context)
  return (
    <section className='' id='todo-page'>
      <Submenu />
      <section className='flex flex-wrap mx-auto my-6'>
        {context.activityList.map(cardInfo => (
          <Card cardData={cardInfo} />
        ))}
      </section>
    </section>
  )
}

export default Todo
