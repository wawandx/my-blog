import React from 'react'
import { graphql, Link } from 'gatsby'

function Template({data, pageContext}) {
  const {next, prev} = pageContext

  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div style={styles.content}>
      <h1 style={styles.title}>{title}</h1>
      <div 
        className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
      />

      <div style={styles.navigation}>
        {next && 
          <Link to={next.frontmatter.path}>
            Next
          </Link>
        }
      </div>
      <div style={styles.navigation}>
        {prev && 
          <Link to={prev.frontmatter.path}>
            Prev
          </Link>
        }
      </div>
    </div>
  )
}

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'avenir'
  },
  title: {
    alignItems: 'center'
  },
  navigation: {
    marginBottom: '25px'
  }
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template