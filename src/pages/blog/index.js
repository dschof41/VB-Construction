import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Banner from '../../components/Banner'
import Stone from '../../img/stone.jpg'

const BlogIndexPage = () => {
    return (
      <Layout>
        <Banner image={Stone} title={'Recent Projects'} height={200}/>
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

export default BlogIndexPage
