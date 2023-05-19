import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../services/supabase'
import styles from './Menu.module.css'

const links = [
  {
    label: 'Relojes',
    path: '/product/relojes'
  },
  {
    label: 'Pulseras',
    path: '/product/pulseras'
  }
]

const Menu = ({ toggle, setToggle, categories, signed }) => {
  const navigate = useNavigate()
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      window.localStorage.removeItem('user_id')
      navigate('/')
    }
  }
  return (
    <nav className={`${styles.nav} ${!toggle && styles.hidden}`}>
      <div className={styles.logoContainer}>
        <picture className={styles.logo}>
          <img src="/yc-shops-logo.png" alt="" />
        </picture>
      </div>
      <ul className={styles.menu}>
        {
          links.map(link => (
            <li key={link.label} onClick={() => setToggle(!toggle)}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))
        }
      </ul>

      <div></div>
      <div></div>

      <div>
        {signed && (
          <button
            className={styles.logoutButton}
            onClick={logout}
          >
            Cerrar sesion
          </button>)
        }
      </div>
    </nav>
  )
}

export default Menu
