import React from 'react'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductPage.js';

import Layout from '../components/layout'

const PillowsPage = (props) => (
  <Layout>
    <h1 style={{
        textAlign: 'right',
        paddingRight: 10,
      }}>Pillows</h1>
    <ProductPage photos={props.data.pillows.edges} />
  </Layout>
)

export default PillowsPage

export const pageQuery = graphql`
  query {
    pillows: allFile(
        sort: { fields: [name], order: DESC},
        filter: {relativeDirectory: {eq: "pillows"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            },
            fixed(width: 300, height: 300, duotone: {highlight: "#feb800", shadow: "#192550"}) {
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
