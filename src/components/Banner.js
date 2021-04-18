import React from 'react'

const Banner = ({image, title, subheading, height=400}) => {
    return(
    <div
        className="full-width-image"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `${height}px`
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen vb-text"
            style={{
              backgroundColor: '#CF5300',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              borderRadius: '.3em'
            }}
          >
            {title}
          </h1>
          {subheading && (<h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen vb-text"
            style={{
              backgroundColor: '#CF5300',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              borderRadius: '.3em'
            }}
          >
            {subheading}
          </h3>)}
        </div>
      </div>
    )
}

export default Banner