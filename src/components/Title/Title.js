import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles.myTitle}>Just a incredible title</h1>
        <h1 className={styles.otherTitle}>This is another cool title</h1>
    </div>
  )
}

export default Title;