import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import Search from './Navbar/Search'
import { useMatch } from 'react-router-dom'
const Navbar = () => {

  const searchRoot = useMatch("/search")

  return (
  
    <nav className='h-[3.75 rem] flex items-center  justify-between px-8'>
        <Navigation/>
       {searchRoot && <Search/>}
        <Auth/>
    </nav>
  )
}

export default Navbar