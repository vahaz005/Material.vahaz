import React, { useState } from 'react'
import Navlist from './Navlist'
import './header.css'
import Search from './Search'

function Header() {

  return (
    <>
   <header>
    <a href="#" className='logo'>LastFlick.Com</a>
    
    <Search/>
    <ul className='nav'>
        <Navlist Name="Home" _id = "1" link = "/"  active="true" />
        <Navlist Name="MyList" _id = "2" link = "/MyList"  active="false" />
        <Navlist Name="TopRated" _id = "3" link = "/top_rated"  active="false" />
    </ul>
    
   </header>
   </>
  )
}

export default Header
