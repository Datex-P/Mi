import React, {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import {Navbar, Nav} from 'react-bootstrap'
import miles from './Pictures/milesLogo.png'
import './index.scss';



export default function NavigationBar() {

  const [isOpen, setOpen] = useState(false)
  return (
    <div className='navbarContainer'>

      <Navbar>
          <Nav>

          <Hamburger 
                  toggled={isOpen} 
                  toggle={setOpen}
          /> 
          <img 
              src= {miles} 
              alt = 'miles logo in navigation bar' 
              style={{width: '58px', height:'58px'}}
          />
          </Nav>
      </Navbar>

    </div>
  )
}

