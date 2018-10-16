import React from 'react'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductPage.js';

import Layout from '../components/layout'

const MiscellaneousPage = (props) => (
  <Layout>
    <h1 style={{
        textAlign: 'right',
        paddingRight: 10,
      }}
    >Odds &amp; Ends</h1>
    <ProductPage photos={props.data.misc.edges} />
  </Layout>
)

export default MiscellaneousPage

export const pageQuery = graphql`
  query {
    misc: allFile(
        sort: { fields: [name], order: ASC},
        filter: {relativeDirectory: {eq: "misc"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 98) {
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
