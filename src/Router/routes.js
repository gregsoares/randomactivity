import { createBrowserRouter } from 'react-router-dom'
// import pages
import Index from '../Pages/Index/Index'

// define routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: Index,
    exact: true,
  },
])

export default routes
