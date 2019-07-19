import React from 'react'
import { Link } from 'gatsby'

function Card(props) {
  return (
    <div style={styles(props.backgroundColor.color, props.backgroundColor.transparant).cardContent}>
      <div style={styles().cardOne}>
        <div style={styles().date}>{props.date}</div>
        <div style={styles().title}>{props.title}</div>
        <Link style={styles(props.backgroundColor.color).divButton} to={props.path}>View More</Link>
      </div>
      <div style={styles().cardTwo}>
        <img style={styles().image} src={require('../../assets/images/React.png')} />
      </div>
    </div>
  )
}

const styles = (color = null, transparant = null) => {
  return {
    cardContent: {
      display: 'flex',
      flex: '0 0 49%',
      maxWidth: '49%',
      backgroundColor: `${color}`,
      background: `${transparant}`,
      background: `-webkit-linear-gradient(to right, ${color}, ${transparant})`,
      background: `linear-gradient(to right, ${color}, ${transparant})`,
      borderRadius: '10px',
      marginBottom: '20px',
      height: '230px',
      flexDirection: 'row',
      boxShadow: '1px 2px 10px #8b8b8c'
    },
    cardOne: {
      margin: '20px',
      flex: '0 0 45%',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    },
    date: {
      fontSize: '15px',
      marginBottom: '10px',
      flex: 1
    },
    title: {
      fontSize: '26px',
      fontWeight: 'bold',
      marginBottom: '10px',
      flex: 4
    },
    divButton: {
      flex: 1,
      width: '120px',
      color: `${color}`,
      backgroundColor: '#FFFFFF',
      borderRadius: '5px',
      textAlign: 'center',
      paddingTop: '8px',
      boxShadow: '1px 2px 10px #8b8b8c',
      textDecoration: 'none'
    },
    cardTwo: {
      margin: '20px',
      flex: '0 0 45%',
      alignSelf: 'center',
      overflow: 'hidden'
    },
    image: {
      width: '75%'
    }
  }
}

export default Card