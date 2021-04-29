import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReactCompareImage from 'react-compare-image'
import Banner from '../components/Banner'
import Stone from '../img/stone.jpg'

export const BlogPostTemplate = ({
  description,
  beforeAndAfter,
  featuredImage,
  afterImage,
  tags,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 is-offset-1">
            <div className="content has-text-centered">
              <h1>{title}</h1>
            </div>
            {beforeAndAfter ? (
              <ReactCompareImage
                leftImage={featuredImage.childImageSharp.fluid.src} leftImageLabel="Before" leftImageAlt='Image of project before'
                rightImage={afterImage.childImageSharp.fluid.src} rightImageLabel="After" leftImageAlt='Image of project after'
                sliderLineWidth="4"
              />
            ):<PreviewCompatibleImage
            imageInfo={{
              image: featuredImage,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />}
          <div className="content">
            <p>{description}</p>
          </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  beforeAndAfter: PropTypes.bool,
  featuredImage: PropTypes.object,
  afterImage: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout logo={data.logo} navLogo={data.navlogo}>
      <Banner image={Stone} title={'See Our Work'} height={200}/>
      <BlogPostTemplate
        description={post.frontmatter.description}
        beforeAndAfter={post.frontmatter.beforeandafter}
        featuredImage={post.frontmatter.featuredimage}
        afterImage={post.frontmatter.afterimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    ...GetLogos
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        beforeandafter
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1900, maxHeight: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        afterimage {
          childImageSharp {
            fluid(maxWidth: 1900, maxHeight: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`