// import pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

// define routes
const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]

export default routes
