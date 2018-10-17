import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ logo, siteTitle, pageTitle }) => (
  <div
    style={{
      background: 'white',
      fontSize: '0.6rem',
      color: "#5d4640",
    }}
  >
    <div
      style={{
        margin: '0 auto 1rem',
        maxWidth: 950,
        padding: '1.45rem 1.0875rem 0',
      }}
    >
      <h1 style={{ 
          display: "inline-block", 
          margin: 0,
          marginRight: 20,
      }}>
        <Link
          to="/"
          style={{
            color: '#5d4640',
            textDecoration: 'none',
          }}
        >
          <Img fixed={logo.childImageSharp.fixed}/>
        </Link>
      </h1>
      <nav style={{
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "right",
        float: "right",
        marginBottom: 30,
      }}>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/laserwords/">Laserwords</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/terrariums/">Terrariums</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/coasters/">Coasters</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/switchplates/">Switchplates</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/papercraft/">Papercraft</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/boxes/">Pillboxes</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/jewelry/">Jewelry</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/pillows/">Pillows</Link>
        <Link style={{ display: "inline-block", marginRight: 10 }} to="/misc/">Miscellaneous</Link>
        <Link style={{ fontWeight: "bold", display: "inline-block", marginRight: 10 }} to="/about/">About</Link>
      </nav>
    </div>
  </div>
)

export default Header
