import React from 'react'
import { Element } from 'react-scroll'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../../static/img/logo.jpg'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  return(
    <div>
      <Element name='home'>
      <Banner image={image} title={title} subheading={subheading}/>
      <Element name='about' id="about">
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title has-text-weight-semibold is-size-2">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.description}</p>
                    </div>
                  </div>
                  <div className="content has-text-centered">
                    <figure className="image">
                      <img
                        src={logo}
                        alt="VB Construction Logo"
                        style={{ borderRadius: '3em', width: '40em', height: '30em'}}
                      />
                       </figure>
                    </div>                   
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-3">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <Element name='projects' id='projects'>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      Recent Projects
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                  </Element>
                </div>
                <Element name='contact-form' id="contactForm">
                  <div className="content">
                    <h3 className="has-text-weight-semibold is-size-3">
                      Contact Us
                    </h3>
                  </div>
                  <ContactForm/>
                </Element>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Element>
      </Element>
    </div>    
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 380, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
