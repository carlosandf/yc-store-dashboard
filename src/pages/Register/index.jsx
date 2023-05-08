import React from 'react'
import styles from './Register.module.css'

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Registrate</h3>
      <div className={styles.credentials}>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Contraseña' />
        <input type='password' name='repeatPassword' placeholder='Confirmar contraseña'/>
      </div>
      <button>Registrarme</button>
    </form>
  )
}

export default Register