import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Footer = ({logo}) => {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: logo,
                    alt: `vb construction logo`,
                  }}
                  imageId="logo"
              />
            </div>
          </div>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        See Our Work
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#contactSection">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/VB-Construction-LLC-103487394595979">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

export default Footer
