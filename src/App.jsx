import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import ScrollTop from './Components/ScrollTop'

const App = () => {
  return (
    <div>
      <ScrollTop/>

      <Navbar/>
      <div className="mt-40">
        <Outlet/>
      </div>

      <Footer />
    </div>
  )
}

export default App