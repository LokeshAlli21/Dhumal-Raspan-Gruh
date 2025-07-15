import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
    <div className='min-h-screen flex flex-col '>
      <Header />
      <Home />
    </div>
  )
}

export default App
