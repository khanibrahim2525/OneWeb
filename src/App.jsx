import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Box from './components/Box'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Feature from './components/Feature'
import Winsiz from './components/Winsiz'

import Footer from './components/Footer'
import AppRoutes from './components/AppRoutes'

const App = () => {
  return (
   <div>
      <Nav />
<AppRoutes/>
      <Winsiz  />
      <Footer/>
    </div>
  )
}

export default App