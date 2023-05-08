import { useState } from 'react'
import { login } from '../../services'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {
  const [credentials, setCredentials] = useState(INITIAL_STATE)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const [data, error] = await login(credentials)
      if (data) {
        return navigate('/insert-product')
      } else {
        throw new Error(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Inicia sesión ;)</h3>
      <div className={styles.credentials}>
        <input
          onChange={(e) => setCredentials({...credentials, email: e.target.value })}
          value={credentials.email}
          type='email'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          value={credentials.password}
          type='password'
          name='password'
          placeholder='Password'
        />
      </div>
      <button>Login</button>
    </form>
  )
}

export default Login