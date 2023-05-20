import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import SignedButton from '../SignedButton'

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

const Menu = ({ toggle, setToggle, categories }) => {
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

      <div onClick={() => setToggle(!toggle)}>
        <SignedButton />
      </div>
    </nav>
  )
}

export default Menu
