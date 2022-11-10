import React from 'react'
import Card from '../../Components/Card/Card'
import Submenu from '../../Components/Submenu/Submenu'

const Todo = () => {
  return (
    <section className='' id='todo-page'>
      <Submenu />
      <section className='flex flex-wrap mx-auto'>
        <Card
          title='One'
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />{' '}
        <Card
          title='Two'
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />{' '}
        <Card
          title='Three'
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </section>
    </section>
  )
}

export default Todo
