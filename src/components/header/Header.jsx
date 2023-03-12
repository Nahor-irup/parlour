import React from 'react'
import "./Header.css"
import Logo from "../../assets/images/logo1.png"

const Header = () => {
  return (
   <div className='header'>
      {/* <img src={Logo} alt="logo" className="logo" /> */}
      <span style={{color:"white",fontSize:"20px",fontStyle:"bold"}}>Logo</span>
      <ul className='header-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </ul>
   </div>
  )
}

export default Header