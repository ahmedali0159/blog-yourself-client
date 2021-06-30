import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
          <nav className="navbar">
                <div className="nav-container">
                    <Link exact to="/" className="nav-logo">
                        blogYourself
                    </Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li  className="nav-item">
                            <NavLink to="/" activeClassName="active" className="nav-links"
                            onClick={handleClick}>
                                Home
                            </NavLink>
                            <NavLink to="/blogs" style={{color:'#000'}} activeClassName="active" className="nav-links"
                            onClick={handleClick}>
                                Blogs
                            </NavLink>
                            <NavLink to="/login" style={{color:'#000'}} activeClassName="active" className="nav-links"
                            onClick={handleClick}>
                                 Login
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
