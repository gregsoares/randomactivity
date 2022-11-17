import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageLink from './Components/PageLink/PageLink'
import Topnav from './Components/Topnav/Topnav'
import Index from './Pages/Index/Index'
import Todo from './Pages/Todo/Todo'
import Test from './Pages/Test/Test'
import randomData from './Store/randomData'

export const ListContext = React.createContext()

function App() {
  const [activityList, setActivityList] = useState(randomData)
  return (
    <>
      <Topnav currentPage={useLocation().pathname} />
      <div className='w-full min-h-screen mx-auto bg-slate-400 pt-4 px-4'>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route
            exact
            path='/todo'
            element={
              <ListContext.Provider value={{ activityList, setActivityList }}>
                <Todo />
              </ListContext.Provider>
            }
          />
          <Route exact path='/test' element={<Test />} />
          <Route
            path='*'
            element={
              <div className='text-2xl mx-auto bold capitalize'>
                Nothing here, <PageLink to='/' text='Home Page' /> is a good
                place to back track to.
              </div>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
