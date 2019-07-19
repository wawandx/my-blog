import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../../assets/fonts.css"
import "../../assets/normalize.css"
import Card from "../components/Card";
import Footer from "../components/Footer";

function getRandomColor() {
  var o = Math.round, r = Math.random, s = 255;
  const rgba = `rgba(${o(r()*s)},${o(r()*s)},${o(r()*s)}`
  return (
    {
      color: `${rgba},1)`,
      transparant: `${rgba},0.4)`
    }
  )
}

function Layout({ data }) {
  const { edges } = data.HomePageQuery
  const tags = data.TagsPageQuery.edges
  
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
                key= {frontmatter.path}
                backgroundColor={getRandomColor()} 
                path={frontmatter.path} 
                title={frontmatter.title}
                date={frontmatter.date}
              />
            )
          })}
        </div>
      </div>
      <Footer link={tags} />
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
  query Name {
    HomePageQuery: allMarkdownRemark(
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
    TagsPageQuery: allMarkdownRemark(
                    sort: {order: ASC, fields: [frontmatter___date]}
                  ) {
                    edges {
                      node{
                        frontmatter {
                          tags
                        }
                      }
                    }
                  }
  }
`

export default Layout