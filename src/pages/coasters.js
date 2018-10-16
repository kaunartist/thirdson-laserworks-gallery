import React from 'react'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductPage.js';

import Layout from '../components/layout'

const CoastersPage = (props) => (
  <Layout>
    <h1 style={{
        textAlign: 'right',
        paddingRight: 10,
      }}
    >Coasters</h1>
    <ProductPage photos={props.data.coasters.edges} />
  </Layout>
)

export default CoastersPage

export const pageQuery = graphql`
  query {
    coasters: allFile(filter: {relativeDirectory: {eq: "coasters"}}) {
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
