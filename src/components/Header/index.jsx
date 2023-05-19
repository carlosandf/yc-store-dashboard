import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Header.module.css'
import { useState } from 'react'
import Menu from '../Menu'

const Header = ({ signed }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className={styles.header}>
      <div onClick={() => setToggle(!toggle)} className={styles.menuButtom}>
        <Icon type={toggle ? 'close' : 'hamburger'} />
      </div>
      <Menu
        signed={signed}
        toggle={toggle}
        setToggle={setToggle}
      />
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
