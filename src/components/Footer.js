import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul>
                                <li>
                                    <Link>
                                    Ana səhifə
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    Haqqımızda
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                        <ul>
                                <li>
                                    <Link>
                                    Kataloq
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    Qeydiyyat
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                        <ul>
                                <li>
                                    <Link>
                                    Tariflər
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    Əlaqə
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h6>Yeniliklərə abonə ol!</h6>
                            <p>Saytımızda olan yeniliklərdən daimi xəbərdar olmaq üçün abonə olun</p>
                            <div className="inputs">
                                <label for="email"/>
                                <input type="email" id="email" placeholder="Email unvani" className="email"/>
                                <input type="submit" value="Abone ol" className="submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid last-container">
               <div className="last">
                   <div className="footer-left">
                        <p>(c) Company Name. All rights is reserved</p>
                    </div>
                    <div className="footer-right">
                        <div className="icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Footer


