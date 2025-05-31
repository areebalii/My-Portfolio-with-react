import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Hero } from './Components/pages/hero/Hero'
import { About } from './Components/pages/about/About'
import { AppLayout } from './Components/layout/AppLayout'
import { Projects } from './Components/pages/project/Projects'
import { Contact } from './Components/pages/Contact'
import { Loader } from './Components/pages/loader/Loader'
import { CustomCursor } from './Components/pages/cursor/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => clearInterval(timer);
  }, [])


  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/home",
          element: <Hero />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]

    }
  ])

  return (
    <>
      <CustomCursor />
      {loading ? <Loader /> : <RouterProvider router={router} />}</>
  )

}

export default App
