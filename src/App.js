import { Route, Routes } from 'react-router-dom'
import PageLink from './Components/PageLink/PageLink'
import Topnav from './Components/Topnav/Topnav'
import Index from './Pages/Index/Index'

function App() {
  return (
    <>
      <Topnav />
      <div className='w-full h-screen mx-auto bg-slate-400 pt-4 px-4'>
        <Routes>
          <Route path='/' element={<Index />} />
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
