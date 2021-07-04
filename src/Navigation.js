import React, {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import miles from './Pictures/miles-logo.png'
import './index.scss';



function Navigation() {

  const [isOpen, setOpen] = useState(false)
  return (
    <div className='navbarContainer'    >

      <Navbar>
      <Nav>

      <Hamburger toggled={isOpen} toggle={setOpen}/> 
      <img 
          src= {miles} 
          alt = 'miles-logo-header' 
          style={{width: '58px', height:'58px'}}

          />
      </Nav>
     
      </Navbar>

   

    </div>
  )
}

export default Navigation
