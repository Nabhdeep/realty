import React, { useState , useEffect } from 'react'
import { navLinks } from '../constants'
import { CompanyLogoNoBG } from '../assets/index'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const handleMenuClick = () => {
    setToggle(!toggle);
  };
  const handleResize = () => {
    if (window.innerWidth > 768) {
        setToggle(true)
    } 
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  console.log(toggle)
  return (
    <div className='header'>
      <Link to='/'>
      <img className='brandLogo'src={CompanyLogoNoBG}/>
      </Link>
      <nav className={toggle?'navbar':'navbar-close'}>
        {navLinks.map(element=>{
          return (<a href={element.id}> {element.title}</a>)
        })}
        </nav>
        <div className='menubutton'>
        <span id ='menu' className="material-icons menu-icon" onClick={handleMenuClick}>{toggle?'close': 'menu'}</span>
        </div>
    </div>
  )
}

export default Navbar
