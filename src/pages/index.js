import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
    <div className="IndexPage">
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0, }} to="/laserwords/"><Img className="fullcolor-thumbnail" fixed={props.data.laserwords.childImageSharp.fullcolor} alt="Laserwords" /><Img className="duotone-thumbnail" fixed={props.data.laserwords.childImageSharp.fixed} alt="Laserwords" /><span className="categoryTitle">Laserwords</span></Link>
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0, }} to="/terrariums/"><Img className="fullcolor-thumbnail" fixed={props.data.terrariums.childImageSharp.fullcolor} alt="Terrariums" /><Img className="duotone-thumbnail" fixed={props.data.terrariums.childImageSharp.fixed} alt="Terrariums" /><span className="categoryTitle">Terrariums</span></Link>
      <Link className="thumbnail" style={{marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0,}} to="/coasters/"><Img className="fullcolor-thumbnail" fixed={props.data.coasters.childImageSharp.fullcolor} alt="Coasters" /><Img className="duotone-thumbnail" fixed={props.data.coasters.childImageSharp.fixed} alt="Coasters" /><span className="categoryTitle">Coasters</span></Link>
      <Link className="thumbnail" style={{marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0,}} to="/switchplates/"><Img className="fullcolor-thumbnail" fixed={props.data.switchplates.childImageSharp.fullcolor} alt="Switchplates" /><Img className="duotone-thumbnail" fixed={props.data.switchplates.childImageSharp.fixed} alt="Switchplates" /><span className="categoryTitle">Switchplates</span></Link>
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0, }} to="/papercraft/"><Img className="fullcolor-thumbnail" fixed={props.data.papercraft.childImageSharp.fullcolor} alt="Papercraft" /><Img className="duotone-thumbnail" fixed={props.data.papercraft.childImageSharp.fixed} alt="Papercraft" /><span className="categoryTitle">Papercraft</span></Link>
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0,}} to="/boxes/"><Img className="fullcolor-thumbnail" fixed={props.data.boxes.childImageSharp.fullcolor} alt="Pillboxes" /><Img className="duotone-thumbnail" fixed={props.data.boxes.childImageSharp.fixed} alt="Pillboxes" /><span className="categoryTitle">Pillboxes</span></Link>
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0,}} to="/jewelry/"><Img className="fullcolor-thumbnail" fixed={props.data.jewelry.childImageSharp.fullcolor} alt="Jewelry" /><Img className="duotone-thumbnail" fixed={props.data.jewelry.childImageSharp.fixed} alt="Cufflinks &amp; Earrings" /><span className="categoryTitle">Jewelry</span></Link>
      <Link className="thumbnail" style={{marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0,}} to="/pillows/"><Img className="fullcolor-thumbnail" fixed={props.data.pillows.childImageSharp.fullcolor} alt="Pillows" /><Img className="duotone-thumbnail" fixed={props.data.pillows.childImageSharp.fixed} alt="Pillows" /><span className="categoryTitle">Pillows</span></Link>
      <Link className="thumbnail" style={{ marginRight: 10, marginBottom: 10, display: "inline-block", height: 300, padding: 0, }} to="/misc/"><Img className="fullcolor-thumbnail" fixed={props.data.misc.childImageSharp.fullcolor} alt="Odds &amp; Ends" /><Img className="duotone-thumbnail" fixed={props.data.misc.childImageSharp.fixed} alt="Odds &amp; Ends" /><span className="categoryTitle">Odds &amp; Ends</span></Link>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    laserwords: file(relativePath: {eq: "laserwords/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    terrariums: file(relativePath: {eq: "terrariums/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    coasters: file(relativePath: {eq: "coasters/castle-coaster-1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    switchplates: file(relativePath: {eq: "switchplates/1.png"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    boxes: file(relativePath: {eq: "boxes/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jewelry: file(relativePath: {eq: "jewelry/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pillows: file(relativePath: {eq: "pillows/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    misc: file(relativePath: {eq: "misc/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    papercraft: file(relativePath: {eq: "papercraft/1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
          ...GatsbyImageSharpFixed
        }
        fullcolor: fixed(width: 300, height: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
