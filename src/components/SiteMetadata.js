import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const siteMetadata = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
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
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return siteMetadata
}

export default useSiteMetadata
