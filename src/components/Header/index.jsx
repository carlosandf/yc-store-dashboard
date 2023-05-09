import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  const logout = async () => {

  }
  return (
    <header className={styles.header}>
      <button className={styles.logoutButton} onClick={logout}>Cerrar sesion</button>
    </header>
  )
}

export default Header