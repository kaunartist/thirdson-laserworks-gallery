import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath:{eq:"logo.png"}) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Handmade with lasers and love in Ottawa, Canada' },
            { name: 'keywords', content: 'laser-cut, laser, handmade, makers, local, art, decor' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header logo={data.logo} siteTitle={data.site.siteMetadata.title} />
        <div
          className="content-wrapper" 
          style={{
            margin: '0 auto',
            maxWidth: 950,
          }}
        >
          {children}
        </div>
        <div className="footer" style={{ clear: "both" }}>
          Copyright 2014-2018 Third Son Laserworks
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
