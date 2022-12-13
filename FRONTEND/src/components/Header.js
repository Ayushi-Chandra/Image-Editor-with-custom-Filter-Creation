import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            
          </a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
            <NavLink className="nav-link" to="/homepage"/>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/homepage">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/loginpage">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registerpage">Register</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/imageeditor">ImageEditor</NavLink>
            </li>
            
          </ul>
          
        </div>
        
    
       
        
      </div>
      
    </nav>


  )
}

export default Header