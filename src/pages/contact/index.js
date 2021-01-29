import React from 'react'
import Layout from '../../components/Layout'
import ContactForm from '../../components/ContactForm'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
