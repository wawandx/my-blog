import React from 'react'
import { Link } from 'gatsby'

function getTags(link) {
  const tags = {}
  link.map((edge) => {
    edge.node.frontmatter.tags.map((index) => {
      if(!tags[index]) {
        tags[index] = []
      }
      tags[index].push(index)
    })
  })
  return Object.keys(tags)
}

function Footer(props) {
  const tags = getTags(props.link)
  return (
    <div style={styles.footerContainer}>
      <div style={styles.Container}>
        <div style={styles.titleTags}>Tags</div>
        <div style={styles.descTags}>
          { 
            tags.map((index) => {
              return (
                <Link key={index} to={`/tags/${index}`} style={styles.button}>{index}</Link>
              )
            })
          }
        </div>
      </div>
      <div style={styles.Container}>
        <div>Copyright &copy; Rachmad Kurniawan (<a href='https://github.com/wawandx'>wawandx</a>)</div>
      </div>
    </div>
  )
}

const styles = {
  button: {
    flex: '0 0 8%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '5px',
    textAlign: 'center',
    marginRight: '10px',
    fontSize: '14px',
    borderRadius: '10px',
    textDecoration: 'none'
  },
  footerContainer: {
    marginTop: '10px',
    boxShadow: '0px -1px 5px #d4d1d4'
  },
  titleTags: {
    flex: 1,
    fontWeight: 'bold'
  },
  descTags: {
    flex: 5,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  Container: {
    flex: '1',
    maxWidth: '88%',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px'
  },
  logo: {
    flex: '5',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  tagsMenu: {
    flex: '1',
    textAlign: 'center',
    opacity: 0.5
  }
}

export default Footer