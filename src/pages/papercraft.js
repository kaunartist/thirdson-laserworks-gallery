import React from 'react'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductPage.js';

import Layout from '../components/layout'

const PapercraftPage = (props) => (
  <Layout>
    <h1 style={{
        textAlign: 'right',
        paddingRight: 10,
      }}>Papercraft</h1>
    <ProductPage photos={props.data.papercraft.edges} />
  </Layout>
)

export default PapercraftPage

export const pageQuery = graphql`
  query {
    papercraft: allFile(
        sort: { fields: [name], order: DESC},
        filter: {relativeDirectory: {eq: "papercraft"}}) {
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
