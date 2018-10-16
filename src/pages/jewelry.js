import React from 'react'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductPage.js';

import Layout from '../components/layout'

const JewelryPage = (props) => (
  <Layout>
    <h1 style={{
        textAlign: 'right',
        paddingRight: 10,
      }}
    >Cufflinks &amp; Earrings</h1>
    <ProductPage photos={props.data.jewelry.edges} />
  </Layout>
)

export default JewelryPage

export const pageQuery = graphql`
  query {
    jewelry: allFile(
        sort: { fields: [name], order: ASC},
        filter: {relativeDirectory: {eq: "jewelry"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            },
            fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#5d4640"}) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
            fullcolor: fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
