import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Navbar/>
      <div className="mt-42">
        <Outlet/>
      </div>
    </div>
  )
}

export default App