import PropTypes from 'prop-types'
import { supabase } from '../../services/supabase'
import Icon from '../Icon'
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
      <div className={styles.menuButtom}>
        <Icon type='hamburger' />
      </div>
      {signed && (
        <button
          className={styles.logoutButton}
          onClick={logout}
        >
          Cerrar sesion
        </button>)
      }
      <section>
        <input type="text" />
      </section>
    </header>
  )
}

Header.propTypes = {
  signed: PropTypes.bool
}

export default Header
