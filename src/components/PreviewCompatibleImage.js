import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, imageStyle, imageClass, imageId }) => {
  imageStyle = (imageStyle || imageClass || imageId) ? {} : { borderRadius: '5%' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img imgStyle={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} className={imageClass} id={imageId} />
    )
  }

  if (!!childImageSharp) {
    return <Img imgStyle={imageStyle} fluid={childImageSharp.fluid} alt={alt} className={imageClass} id={imageId} />
  }

  if (!!image) {
    return <Img imgStyle={imageStyle} fluid={image.fluid} alt={alt} className={imageClass} id={imageId} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} className={imageClass} id={imageId} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
