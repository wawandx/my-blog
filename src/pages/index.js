import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

function Layout({data}) {
  const { edges } = data.allMarkdownRemark
  
  return (
    <div>
      <Header />
      <div style={styles.content}>
        { edges.map((edge) => {
          const { frontmatter } = edge.node
          return (
            <div 
              key={frontmatter.path}
              style={styles.list}
            >
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          )
        })}
        <div>
          <Link to='/tags'>
            Browse by Tag
          </Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'avenir'
  },
  list: {
    marginBottom: '15px'
  }
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
