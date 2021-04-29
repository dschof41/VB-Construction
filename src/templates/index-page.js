import React from 'react'
import { Element } from 'react-scroll'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  logo,
  mainpitch,
  intro,
}) => {
  return(
    <div>
      <Element name='home'/>
      <Banner image={image} title={title} subheading={subheading}/>
      <Element name='about' id="about" />
      <section className="section section--gradient">
        <div className="container">
          <div className="section" id="aboutSection">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="tile">
                    <h1 className="title has-text-weight-semibold is-size-2">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="subtitle">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="column is-6 is-offset-3">
                  <PreviewCompatibleImage
                      imageInfo={{
                      image: logo,
                      alt: `VB Construction Logo`
                      }}
                    />
                  </div>
              </div>
            </div>
          </div>
          <div className="section" id="blurbsSection">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 className="has-text-weight-semibold is-size-3">
                    {intro.heading}
                  </h2>
                  <p>{intro.description}</p>
                </div>
                <Features gridItems={intro.blurbs} />
              </div>
            </div>
          </div>
          <div className="section" id="blogSection">
            <Element name='projects' id='projects'>
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-3">
                  See Our Work
                </h3>
              </div>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
            </Element>
          </div>
            <div className="section" id="contactSection">
              <div className="columns">
                <div className="column is-10 is-offset-1">
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
      </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout logo={data.logo} navLogo={data.navlogo}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        logo={data.logo}
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
    ...GetLogos
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
        subheading
        mainpitch {
          title
          description
        }
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
