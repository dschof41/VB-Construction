import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Banner from '../../components/Banner'
import Stone from '../../img/stone.jpg'
import { graphql } from 'gatsby'

const BlogIndexPage = ({data}) => {
    return (
      <Layout logo={data.logo} navLogo={data.navlogo}>
        <Banner image={Stone} title={'See Our Work'} height={200}/>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPosts {
    ...GetLogos
  }`
export default BlogIndexPage
