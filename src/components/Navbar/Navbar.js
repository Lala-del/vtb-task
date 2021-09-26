import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Valuta from './Valuta'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
    return (
       <div className ="navigation-bottom">
            <div className= "container">
            <div className= "navigation">
                <div className="navigation__brand">
                    <Link to= '/'/>
                        logo.
                    <Link/>
                </div>
                <div className="navigation__links">
                        <ul>
                            <li>
                                <Link to="/home">
                                    Ana səhifə
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    Haqqımızda
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    Bloq
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="sign-link">
                                    Giriş
                                </Link>
                            </li>
                            <li>
                                <Valuta/>
                            </li>
                            <li className="basket">
                                <Link to="/basket" >
                                  <i class="fas fa-shopping-cart"></i>
                                </Link>
                            </li>
                            
                        </ul>
                        <div  className="bars">
                          <FaBars/>
                        </div>
                        
                </div>
            </div>
        </div>
       </div>
        
    )
}

export default Navbar
