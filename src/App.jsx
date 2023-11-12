import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar , Hero, Assets, Environments , Archviz , Footer} from './components/index.js'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='appMain'>
  <Navbar />
    <Hero />
    <Assets />
    <Environments />
    <Archviz />
  <Footer />
    </div>
  </>
  )
}

export default App
