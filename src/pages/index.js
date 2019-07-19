import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../../assets/fonts.css"
import "../../assets/normalize.css"
import Card from "../components/Card";

function getRandomColor() {
  var o = Math.round, r = Math.random, s = 255;
  const rgba = `rgba(${o(r()*s)},${o(r()*s)},${o(r()*s)}`
  return (
    {
      color: `${rgba},1)`,
      transparant: `${rgba},0.4)`
    }
  )
  
  ;
}

function Layout({data}) {
  const { edges } = data.allMarkdownRemark
  
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <Header />
        <div style={styles.multiRows}>
          { edges.map((edge) => {
            const { frontmatter } = edge.node
            return (
              <Card 
                backgroundColor={getRandomColor()} 
                path={frontmatter.path} 
                title={frontmatter.title}
                date={frontmatter.date}
              />
            )
          })}
        </div>
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
  content: {
    flex: '1',
    alignSelf: 'center',
    width: '88%',
  },
  list: {
    marginBottom: '15px'
  },
  multiRows: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
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

{/* <div 
  key={frontmatter.path}
  style={styles.list}
>
  <Link to={frontmatter.path}>
    {frontmatter.title}
  </Link>
</div> */}