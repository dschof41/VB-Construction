import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, getAsset }) => {
  const tags = entry.getIn(['data', 'tags'])
  const data = entry.getIn(['data']).toJS()
  return (
    <BlogPostTemplate
      description={data.description}
      tags={data.tags}
      title={data.title}
      details={data.details}
      beforeAndAfter={data.beforeandafter}
      featuredImage={getAsset(data.featuredimage)}
      afterImage={getAsset(data.afterimage)}
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
