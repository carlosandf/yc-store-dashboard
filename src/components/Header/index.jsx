import React from 'react'
import { supabase } from '../../services/supabase'
import styles from './Header.module.css'

const Header = ({ signed }) => {
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      window.localStorage.removeItem('user_id')
    }
  }
  return (
    <header className={styles.header}>
      {signed && (
        <button
          className={styles.logoutButton}
          onClick={logout}
        >
          Cerrar sesion
        </button>)
      }
    </header>
  )
}

export default Header