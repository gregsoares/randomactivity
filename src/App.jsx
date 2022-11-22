import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-xl bg-slate-800'>
      <div>
        <img src='/vite.svg' className='logo' alt='Vite logo' />
        <div className='p-8 m-2 bg-slate-800'>LOGO HERE</div>
      </div>
      <h1 className='text-2xl'>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
