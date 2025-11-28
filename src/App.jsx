import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashboardTemplate from './pages/DashboardTemplate'


function App() {
  

const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Landing/></>
  },{
    path:"/how-it-works",
    element:<div>How it works page</div>

  },{
    path:"/signup",
    element: <Signup />,
  },{
    path:"/login",
    element:<><Login/></>
  },{
    
    path:"/DashboardTemplate",
    element:<><DashboardTemplate/></>
  }
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
