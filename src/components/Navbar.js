import React from 'react'

function Navbar() {
  return (
    <nav style={styles.navbarContainer}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>RKDev</div>
        <div style={styles.navbarMenu}>Blog</div>
        <div style={styles.navbarMenu}>Portfolio</div>
        <div style={styles.navbarMenu}>About me</div>
      </div>
    </nav>
  )
}

const styles = {
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    flexWrap: 'wrap',
    boxShadow: '0px 1px 5px #d4d1d4'
  },
  navContainer: {
    flex: '1',
    maxWidth: '88%',
    display: 'flex',
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
  navbarMenu: {
    flex: '1',
    textAlign: 'center',
    opacity: 0.5
  }
}

export default Navbar