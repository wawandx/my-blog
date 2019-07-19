import React from "react"
import { StaticQuery, graphql } from "gatsby"

function TitleAndDescription({data}) {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.desc}>{description}</p>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    marginTop: '50px',
    fontSize: '40px',
    marginBottom: '20px'
  },
  desc: {
    marginTop: '0',
    marginBottom: '20px',
    opacity: '0.5'
  }
}

function Header() {
  return (
    <StaticQuery 
      query= {graphql`
        query {
          site{
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
