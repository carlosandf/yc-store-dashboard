import styles from './Alert.module.css'

const Alert = ({status, message}) => {
  return (
    <div className={styles[status]}>
      <p>{message}</p>
    </div>
  )
}

export default Alert