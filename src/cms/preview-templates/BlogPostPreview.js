import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, getAsset }) => {
  const tags = entry.getIn(['data', 'tags'])
  const data = entry.getIn(['data']).toJS()

  if (data.beforeandafter) {
    data.featuredimage = {childImageSharp: {fluid: {src: getAsset(data.featuredimage).toString()}}}
    data.afterimage = {childImageSharp: {fluid: {src: getAsset(data.afterimage).toString()}}}
  }
  return (
    <BlogPostTemplate
      description={data.description}
      tags={data.tags}
      title={data.title}
      beforeAndAfter={data.beforeandafter}
      featuredImage={data.featuredimage}
      afterImage={data.afterimage}
      location={{}}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPostPreview
