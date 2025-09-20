import React from 'react'
import { navbar } from '../json/navbar'
import './css/Components/navbar.css'
const Navbar = () => {
  return (
    <div>
        {navbar.map((e)=>(
            <div className="nav">
                
            <div className='logo' key={e.id}>
                <img src={e.logo} alt="" />
            </div>
            <div className='navlinks'>
                <li>
                    <ul>{e.links.home}</ul>
                    <ul>{e.links.about}</ul>
                    <ul>{e.links.projects}</ul>
                </li>
            </div>
            <div className="contactbtn">
                <button>{e.links.contact}</button>
            </div>
            </div>
        ))}
      
    </div>
  )
}

export default Navbar
