import React, {useState, useEffect} from 'react'
import logo from '../img/favicon2_32x32.jpg'
import {Link as ScrollLink} from 'react-scroll'
import { Link } from 'gatsby'
import {useLocation} from '@reach/router'

const Navbar = () => {
  const location = useLocation()
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');
  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
  };

  useEffect(() => {
    setNavBarActiveClass(active ? 'is-active' : '')
  }, [active]);

    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="vb construction logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
          { location.pathname === '/' ? (
            <div className="navbar-start has-text-centered">
              <ScrollLink 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="navbar-item"
                  offset={-50}
                > 
                Home
              </ScrollLink>
              <ScrollLink 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="navbar-item"
                  offset={-50}
                > 
                About
              </ScrollLink>
                <ScrollLink 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="navbar-item"
                  offset={-50}
                >
                See Our Work
              </ScrollLink>
                <ScrollLink 
                  to="contact-form" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="navbar-item"
                  offset={-50}
                >
                Contact Us
              </ScrollLink>
            </div>
            ) :
            (
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/#about">
                  About
                </Link>
                <Link className="navbar-item" to="/#projects">
                  See Our Work
                </Link>
                <Link className="navbar-item" to="/#contactForm">
                  Contact Us
                </Link>
              </div>
          )
          }
          </div>
        </div>
      </nav>
    )
}

export default Navbar
