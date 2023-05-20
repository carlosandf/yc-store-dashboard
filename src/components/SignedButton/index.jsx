import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../services/supabase'
import AppContext from '../../context/AppContext'
import styles from './SignedButton.module.css'

const SignedButton = () => {
  const { state } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClick = async () => {
    if (state.signed) {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        window.localStorage.removeItem('user_id')
        navigate('/')
      }
    } else {
      navigate('/login')
    }
  }
  return (
    <button
      className={styles.logoutButton}
      onClick={handleClick}
    >
      {state.signed ? 'Cerrar Sesión' : 'Iniciar Sesión'}
    </button>
  )
}

export default SignedButton
