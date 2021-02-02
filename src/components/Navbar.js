import React from 'react'
import logo from '../img/favicon-32x32.png'
import {Link as ScrollLink, Element} from 'react-scroll'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
          <ScrollLink 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="navbar-item"
                title="logo"
              >
              <img src={logo} alt="vb construction logo" />
            </ScrollLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
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
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
