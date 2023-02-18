import React from 'react'
import "./topbar.scss"
import {Person,Email} from '@mui/icons-material/';


const Topbar = ({setMenuOpen, menuOpen}) => {


  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>886144085</span>
          </div>
          <div className="itemContainer">
            <Email className='icon'/>
            <span>anns@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar