import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar ,Home, Footer, AssetsPage, Environments, Contact, AboutPage} from './components/index.js'
import { Routes , Route } from 'react-router-dom'
import EnvironmentsPage from './components/EnvironmentsPage.jsx'
import ArchPage from './components/ArchPage.jsx'
import CustomerPage from './components/CustomerPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='appMain'>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/games' element = {<h1>Games</h1>} />
    <Route path='/assets' element={<AssetsPage />} />
    <Route path='/environments' element={<EnvironmentsPage />} />
    <Route path='/arc' element={<ArchPage />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/customers' element={<CustomerPage />}/>
    <Route path='/about' element={<AboutPage />} />
  </Routes>
  <Footer />
    </div>
  </>
  )
}

export default App
