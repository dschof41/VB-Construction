import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix, graphql } from 'gatsby'

const TemplateWrapper = ({logo, navLogo, children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="64x64"
          href={`${withPrefix('/')}img/favicon1.jpg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon2_32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon2_16x16.jpg`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/favicon1.jpg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/logo.jpg`}
        />
      </Helmet>
      <Navbar navLogo={navLogo} />
      <div className="has-navbar-fixed-top">{children}</div>
      <Footer logo={logo} />
    </div>
  )
}

export const GetLogos = graphql`
  fragment GetLogos on Query {
      logo: imageSharp(fluid: {originalName: {eq: "logo.jpg"}}) {
        fluid(maxWidth: 760, quality: 100) {
          ...GatsbyImageSharpFluid
          }
      }
      navlogo: imageSharp(fluid: {originalName: {eq: "navLogo.jpg"}}) {
        fluid(maxWidth: 64, quality: 100) {
          ...GatsbyImageSharpFluid
          }
      }
  }`

export default TemplateWrapper
